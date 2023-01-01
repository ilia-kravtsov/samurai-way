С помощью create react app type script создаем новое приложение

Удаляем лишнее из компоненты App

добавляем в основной возвращаемый div глобальные структурные разделы проекта
header nav body footer и т.д.

С помощью css выравниваем по центру и задаем максимальную ширину для всего контента
А так же разбиваем контент на отдельные зоны с помощью grid

Далее разбиваем каждую отдельную зону на отдельные блоки div с кратким описанием

Распределяем весь код по отдельным компонентам для каждой отдельный файл, группируем в отдельной папке
single responsibility

для каждой компоненты с форматом tsx создаем отдельный css файл и группируем их в отдельную папку
импортируем css файлы в файлы tsx к которым они относятся

Стили классов одной компоненты css применяются и для другой компоненты и без import export
если в tsx файле употребить название класса заданного в css другой компоненты

Все tsx файлы превращаются в один tsx файл который называется bundle.js
по network никаких css файлов при запуске проекта к нам не приходит к нам приходит только js код
и этот js код добавляет css в html элемент прям в тело документа в head в тег style перед body
Все css файлы по итогу попадают в один глобальный header в один глобальный набор стилей

То есть по факту так как стили для любой разбитой структурно компоненты все равно оказываются в одном и том же месте
именно поэтому любой стиль из такого css блока для конкретной компоненты влияет на все остальные компоненты

То есть если где-то в css файле для конкретной компоненты мы пропишем название класса item то в любой другой компоненте
где мы укажем item применятся стили из первой компоненты.

А если мы хотим чтобы стили из конкретной компоненты влияли только на нее то мы
переименовываем css файл в модуль Nav.css в Nav.module.css
модуль он же css объект и теперь при импорте import './Nav.css' нужно писать
import "задаем название стилей" from './Nav.module.css'

После задания слова module в названии в браузер будет приходить не класс nav из css (который мы задавали
в css файле), а Nav_item__wbQ2R, что позволяет нам в css файле писать короткие названия и не думать о том
как сделать название уникальным и при этом они будут дейтсвовать только на ту компоненту на которую нам нужно.

Для того чтобы пользоваться этой технологией нужно использовать название стилей которое мы задали при импорте модуля
import "задаем название стилей" from './Nav.module.css'
например import NavStyle from './Nav.module.css'

NavStyle - объект. Объект это структура данных у которой есть ключ-значение
let NavStyle {
'' : '',
'' : '';
} -> объект

т.о. NavStyle - тоже объект ключами которого являются названия стилей которые мы написали в css файле только без точки
класс nav класс item

let NavStyle {
'nav' : '',
'item' : '';
}

а значениями этих ключей будут те самые Nav_item__wbQ2R уникальные значения которые задаются при указании нами
слова module в названии css файлов

let NavStyle {
'nav' : 'Nav_item__wbQ2R',
'item' : 'Nav_item__wbQ2R';
}

т.о. чтобы применить свойства и значения указанные в css модуле в tsx файле нам нужно
в className указать = {} - значит что мы внутрь jsx разметки хотим вставить js код
className={NavStyle.nav}

При этом для картинок которые вложены в теги при проведении действий выше для родительского тега
ничего делать не потребуется стили которые были указаны как вложенные применятся и к ней header img

в js запрещено в названии свойства объекта указывать -
если в имени мы используем - то тогда мы должны обращаться к такому свойству с помощью ['header-img']

- не используем _ используем

Если мы хотим указать 2 стиля для элемента

по старинке в jsx файле мы бы написали className='item active'
а в css .item.active {...}

let c1 = 'item'
let c2 = 'active'
let cssModuleObject = c1 + ' ' + c2;

but in ecma script 6

let cssModuleObject = `${c1} ${c2}` the same with - let cssModuleObject = c1 + ' ' + c2; ;
если мы внедряем в jsx js код то мы пишем его в {}
если мы внедряем js в строку то мы пишем его в `${}`

now

mainCssModuleObject = `${CssModuleObject.item} ${CssModuleObject.active}`
но так как `` - это тоже js инструкция то вс. эту х..ню мы тоже оборачиваем в {} и получаем
mainCssModuleObject = {`${CssModuleObject.item} ${CssModuleObject.active}`}

то есть бл... вот так - <div className={`${NavStyle.item} ${NavStyle.active}`}>

чтобы узнать приходят ли свойства в объект просто выводим его в console.log()

Группируем css и tsx файлы компонент в отдельные папки

Дробим на компоненты всё что дробится, а дробится всё.

Propsы Propsы Propsы...

Когда мы пишем в tsx разметке

<Post /> - это значит что в компоненте Props создаётся пока пустой объект {} 
с входными данными компоненты - которых пока нет. 
Этот пустой объект называется props (похоже на сокращение от properties) хотя его можно было назвать хоть crops
но propsами его договорились называть программисты.

Как этим пользоваться

<Post value="007"/> Когда мы добавляем в компоненту атрибут value="007" в наш объект props попадает

{
value: 007;
}

props={value:007} и теперь внутри самой компоненты, мы можем обращаться к объекту props

{props.value} подставит нам вместо написанного 007

собсна всё.

Если мы напишем

<Post value="007" name="ilai"/>

то в объекте props у нас будет

{
value: 007,
name: 'ilai'
}

ствесна далее мы можем обращаться как {props.value} так и {props.name} первое выдаст 007 второе 'ilai'

Идея в чём, в том что таким образом можно решить основную проблему "дублирование кода"

мы сможем брать один и тот же <Post/> и добавляя в него разные атрибуты
(то есть добавляя разные свойства и значения в объект props компоненты Post)
влиять на то как конкретный пост будет отображаться в браузере,
то есть влияя на вход получаем разный выход.
То есть наша функция будет иметь доступ к объекту props

Ещё важный момент что если мы напишем

<Post value="007"/>
<Post name="ilai"/>

это значит что react вызовет функцию Post - 2 раза (компонента эта функция которая возврщает разметку jsx)
но в первом случае она вызовется со значением которое мы указали в первый раз
во втором случае она вызовется со значение которое мы указали во второй раз

React_17

1 компонента 1 папка

React_18

Компонента это функция которая возвращает разметку jsx, именуется с большой буквы и принимает на входе объект props
props нужен компоненте для того чтобы на выходе при вызове одной и той же функции получать разную разметку.

Функция должна работать очень предсказуемо
Функция должна возвращать что-либо основываясь только на входящих данных

Предсказуемость поведения заключается в том что если всегда приходит одинаковый объект props
значит функция всегда вернет одинаковую разметку, но если объект props разный на входе, то и на выходе
разметка будет разной

React_19

Делаем ссылки кликабельными, работа с роутингами (маршрутизация)

Нам нужна система роутинга которая будет отслеживать адрес указаннный в адресной строке

В комопненте App в <div className='app_wrapper_content'> должна появляться та компонента которая будет
соответствовать url указанному в адресной строке, который будет изменяться в зависимости от нажатия по ссылкам
указанным в nav

Вся логика spa изначально отрабатывает вне зависимости от url но нам нужно установить такой пакет программу модуль
с помощью которой после нажатия по ссылкам nav spa отрабатывал бы в зависимости от url
для этого нужно настроить систему маршрутов

разработчики cra не включили в node js пакет программу модуль которая работает с модулями поэтому нам нужно установить
дополнительно

для этого в терминале прописываем

npm i react-router-dom

после этой команды необходимый пакет установится в node_modules но когда код отправится в gid репозиторий
этот пакет туда уже не пойдет потому что папка node_modules находится в git.ignore
соответственно у других людей так работать не будет

поэтому к команде npm i react-router-dom мы должны добавить -save
npm i react-router-dom -save
это значит что пакет необходимо не просто установить а еще и внести запись в package.json файл
package.json файл это главный файл который характеризует нашу папку как проект

в package.json файле записаны все зависимости
когда мы активируем команду с -save ->  npm i react-router-dom -save
в package.json появится запись
и в node-modules пакет установится и мы закинем изменения на сервер
и попрежнему у коллег этого пакета не будет но
у них будет запись в package.json и для того чтобы у них пакет восстановился
им нужно будет просто написать npm i то есть доустановить недостающие пакеты

npm i - npm анализирует зависимости прописанные в файле package.json и в папке node_modules
сравнивает смотри чего не хватает и доустанавливает отсутствующие зависимости

При кликах на ссылки у нас меняется путь в браузерной строке и наша задача анализировать путь
и подставлять нужную компоненту вместо этого пути

Для этого есть специальная компонента <Route/>

import {Route} from 'react-router-dom' {} - потому что Route экспортируется не по дефолту

добавляем атрибут component чтобы каждый Route отвечал за свою компоненту

<Route component={название компоненты без кавычек и других скобок}/>

<Route component={Dialogs} /> - ты отрисуешь Dialogs когда нужно
<Route component={Profile} /> - а ты отрисуешь Profile когда нужно

а когда нужно? зависит от url который меняется так как мы указали <a href='/profile'>profile</a>

Если мы где-либо используем <Route/> значит необходимо обернуть эти теги в корневой элемент
<BrowserRouter> </BrowserRouter>  мы обернули в него все App сразу внутри return () первым тегом

Для того чтобы каждая компонента <Route/> понимала к какой ссылке относится нужно задать атрибут path
где указываем окончание url по которому <Route/> поймет когда запускаться например
<Route path='/dialogs' component={Dialogs}/>

То есть <Route/> анализирует ссылку в адресной строке и если окончание ссылки совпадает с path то отрисовывает
компоненту указанную в component, а первоночально окончание url задаем в блоке со ссылками либо атрибутами href
либо to

Наша задача изменить адресную строку браузера не перезагружая страничку для этого используется спец тег
<NavLink></NavLink>
NavLink импортируется
import {NavLink} from 'react-router-dom';

вместо <a href=''></a> используется атрибут to
<NavLink to='/profile'></NavLink>

NavLink - это компонента у этой компоненты есть свой атрибут to все эти атрибуты по итогу превращаются в props
NavLink - возвращает тот же самый тег а поэтому если в стилях задать что-либо для a то это применится и к NavLink

На а можно повесить addEventListener - обработчик события, подменить путь в адресной строке на нужный нам
history api позволяет делать изменения в адресной строке
а дальше он делает PreventDefault то есть отменяет действие по умолчанию
у а ссылки действие по умолчанию - отправить на тот путь который отрисован в атрибуте href

NavLink - возвращает ссылку, но я хочу отслеживать клик по тебе и когда по тебе будут кликать я буду
просто менять адрес в адресной строке браузера но не буду делать редирект перенаправление на эту страничку
я там сделаю PreventDefault

NavLink - так же добавляет класс active к классическому тегу a, но в реакте все равно нужно будет указывать
подобное через свойство объекта

Как сказать NavLink чтобы он добавлял активным ссылкам не класс active а тот который мы указали в css
и для этого у NavLink есть атрибут activeClassName

<NavLink to='/messages' activeClassName={navbarStyle.activeLink}>Messages</NavLink>
то есть теперь NavLink по умолчанию будет добавлять тот класс который мы указали в css
и та ссылка на которой мы находимся станет золотого цвета

React 21

Создаем css для messages

создаем 2 колонки в одной имена в другой сообщения
в messages 2 колонки - значит 2 div
каждое имя - отдельная div

Задаем классы для всех div
глобальная div className='messages'
ее потомок div className='messagesItems'
и конкретное имя div className='item'

Вторая колонка/div
div className='messages'

Переключение между вкладками webstorm ctrl alt -> <-

меняем классы в виде строк на модули

 <div className={messagesStyle.messages}></div>
 <div className={messagesStyle.messagesItems}></div>

 <div className={messagesStyle.messages}></div>
в css для обертки messages говорим что она является gridом

messages {
display: grid;
}

и если в app варианте мы использовали подход grid-template-areas
Здесь мы скажем что наш grid состоит из 2-х колонок
1 колонка занимает 2 фракции
2 колонка занимает 10 фракций

grid-template-columns: 2fr 10fr;

Добавляем к одному из диалогов класс active через конкатенацию

<div className={messagesStyle.dialog + ' ' + messagesStyle.active}></div>

React 22

Переключаемся между собеседниками во вкладке messages

К каждому диалогу привязываем свой id который будет прописываться в том числе в адресной строке
что даст нам в будущем возможность делиться ссылкой где будет сразу открываться нужный диалог

Поэтому каждое имя собеседника в списке messages прописываем через Navlink

Задача NavLink - поменять url в браузере без перезагрузки страницы на тот который указан в атрибуте to
<NavLink to='/messages/1'>ilai</Navlink>

Route следит за своим куском адресной строки и отображает даже если после нужного куска написано что угодно
чтобы этого не было применяется атрибут exact перед path

<Route exact path='/video' component={Video}/> то есть Route совершенно точно должен совпасть с path
и в этом случае при переходе по ссылке отображаться контент будет только тогда
когда в адресной строке 100% совпадение во всех остальных случаях нет

Необязательно при смене URL делать новый Route или подружаться новая компонента

Мы должны при смене URL показывать разные сообщения для каждого собеседника свои
не другие компоненты а другие сообщения поэтому в данном случае Route не понадобится

Если подкомпоненты нигде больше не будут использоваться то и смысла выносить их в отдельный файл тоже нет

найти файл во вкладке project alt+F1+enter

Рефакторинг, разбивали все на компоненты и делали код более читаемым.

React 24

Когда мы нажимаем в nav messages
messagesItem подгружаются из сервера,
мы делаем AJAX запрос на сервер, сервер вощвращает нам список диалогов

то есть во всех разделах данные будут браться с сервера

Массив нужен для содержания совокупности одинаковых объектов

Разграничиваем всё на две области

Область Данных BLL Область UI user interface
BLL (Data) - истина

const messagesData = [
{id: 1, name: 'ilia'},
{id: 2, name: 'oleg'},
{id: 3, name: 'ivan'},
{id: 4, name: 'anna'},
{id: 5, name: 'ilai'},
{id: 6, name: 'petr'},
]

UI рисуется в зависимости от BLL
UI - это компоненты, компонентам нужны данные которые находятся у нас в BLL(data)
компонента получает данные через props и отрисовывает

пока данные находятся внутри ui

Рефакторим код, создаем вместо атрибутов массив с объектами и выдергиваем из массива объекты
и указываем их в качестве атрибута компоненты

<MessageItem name={messagesData[0].name} id={messagesData[0].id}/>
<MessageItem name={messagesData[1].name} id={messagesData[1].id}/>

технически мы из массива данных из массива объектов должны получить массив компонент
массив jsx элементов
то есть нам нужно сделать преобразование из одного массива в другой массив
такое преобразование достигается с помощью функции map в js

готовим код к использованию метода map

создадим массив у которого будет набор сообщений

любой код - это сущность какая-то запись в базе данных
естественно у каждой сущности у каждой записи в базе данных есть id-шник

Каждое сообщение это не просто текст, но еще и данные когда сообщение создано отправлено кто отправитель и т.д.

В разных сущностях id могут совпадать
у сообщений своя нумерация у собеседников своя нумерация

Эти id мы не будем придумывать на клиенте(фронтенде) эти id нам будут приходить с сервера но пока сервера
нет создаем их вручную эмитируя эти данные

зажатый ctrl -><- - быстрое перемещение курсора по словам
зажатый ctrl+shift -><- - быстрое выделение курсоров слов

Подготовили компоненту Messages
готовим MyPosts

переносим свойства в объект для каждой компоненты из атрибутов этой компоненты

const myPostData = [
{id: 1, message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
{id: 2, message: 'It is my first post', likesCount: 7, disLikesCount: 2},
]

<Post message={myPostData[0].message} likesCount={myPostData[0].likesCount} disLikesCount={myPostData[0].disLikesCount}/>
<Post message={myPostData[1].message} likesCount={myPostData[1].likesCount} disLikesCount={myPostData[1].disLikesCount}/>

То есть каждый наш объект характеризует какую-то сущность в базе данных

business logic layer - BLL уровень бизнес логики
UI - React
BLL - Redux

в BLL хранится истина
массивы объектов, объекты, массивы
эти данные находятся в памяти
мы сделали AJAX запрос на сервер пришел ответ, мы заполнили эти объекты в BLL
после этого мы готовы к тому чтобы оживить наш ui дать нашему ui какую-то правильную информацию
и наш UI работая с этими объектами рисует непосредственно всё что мы видим в проекте

но так как в будущем мы не будем точно знать сколько именно объектов к нам придет то
будем пользоваться методом map

React 25

Если мы передадим массив каких-либо объектов например строк
указываем в {} потому что массив это js
Если мы напишем массив строк в jsx разметке

{
['ilia', '234234', 'asdf']
}

то компилятор отобразит каждый элемент по отдельности один за другим
то есть он увидит массив, но так как массив нельзя отобразить ввиде html
потому что это массив, поэтому компилятор отобразит каждый элемент
в виде строки без пробелов и , слитно

А если в массиве будет сидеть объект то он не сможет превратить объект в html
а строки могут, а кроме строк
в таком массиве может находиться jsx компонента
<MessageItem name={messagesItemData[0].name} id={messagesItemData[0].id}/>

соответственно мы можем отобразить массив таких компонент

[
<MessageItem name={messagesItemData[0].name} id={messagesItemData[0].id}/>,
<MessageItem name={messagesItemData[0].name} id={messagesItemData[0].id}/>,
<MessageItem name={messagesItemData[0].name} id={messagesItemData[0].id}/>,
]

То есть мы в jsx вставляем массив компонент
React видит что это массив, раскрывает его, видит что каждый элемент массива это то с чем он может работать
и он вставляет наши компоненты

теперь вынесем этот массив компонент за пределы return

let messageElements = [
<MessageItem name={messagesItemData[0].name} id={messagesItemData[0].id}/>,
<MessageItem name={messagesItemData[1].name} id={messagesItemData[1].id}/>,
<MessageItem name={messagesItemData[2].name} id={messagesItemData[2].id}/>,
<MessageItem name={messagesItemData[3].name} id={messagesItemData[3].id}/>,
<MessageItem name={messagesItemData[4].name} id={messagesItemData[4].id}/>,
<MessageItem name={messagesItemData[5].name} id={messagesItemData[5].id}/>,
]

помещаем его в переменную и затем указываем ее после return внутри div в {}

{
messageElements
} -> React видит что здесь переменная в которой находится массив
в этом массиве каждый элемент является валидной компонентой
и он берет и рисует по очереди каждую компоненту на странице

отсюда вывод что нужно оптимизировать создание таких массивов массивов jsx элементов
то есть у нас с сервера будут приходить данные - обычные js объекты
массивы, массивы объектов, и т.д. а мы должны из них получать автоматически массив элементов
которые React может отобразить

Для этого используется функция .map
у любого массива мы можем вызвать метод map
map - это метод массива, используется чтобы преобразовать массив одних элементов в массив других элементов
работает с каждым элементом старого массива создавая в результате новый массив но количество элементов в новом
будет равно количеству элементов в старом

Пример

['Dmitry', 'Andrey', 'Viktor', 'Sveta', 'Sasha']

Нам нужно получить массив чисел где будет указано вместо мужского имени - 1
Вместо женского имени - 0

[1,1,1,0,0]

То есть каждое имя(элемент в старом массиве) проецируется на новый элемент в новом массиве
новый массив имеет такую же длину

в js это выглядит так:

let newArray =

oldArray.map( (el) => {
if (isMaleName(el)) {
return 1;
}
else {
return 0;
}
})

map принимает в себя стрелочную функцию не элемент
единственным параметром map является стрелочная функция
стрелочная функция в map вызывается столько раз сколько у нас элементов в исходном массиве
и каждую итерацию в эту стрелочную функцию в этот параметр el поочередно прийдет каждое имя
сюда будут приходить старые элементы чтобы мы произвели над ними те или иные дейтсвия и
вернули из этой стрелочной функции новые элементы на основе старых
и этот новый элемент станет элементов нового массива

Рефакторинг 1.0

let new Array = oldArray.map( (el) => {
return isMaleName(el) ? 1 : 0;
}

Рефакторинг 2.0 если функция ничего не делает перед return

let newArray = oldArray.map( el => isMaleName(el) ? 1 : 0);

так же el можно заменить на name для ясности

или например

у нас есть массив имен

['Dmitry', 'Andrey', 'Viktor', 'Sveta', 'Sasha']

а мы хотим получить новый массив в котором каждое имя будет обернуто элементом li

let newArray = oldArray.map(name => '<li>' + name + '</li>');
let newArray = oldArray.map(name => `<li>${name}</li>`);

['<li>Dmitry</li>', '<li>Andrey</li>', '<li>Viktor</li>', '<li>Sveta</li>', '<li>Sasha</li>']

чтобы потом например вставить это все в ul

или у нас есть массив строк

['hello', 'ilia', 'hi']

каждое слово конвертируется мапится в новый объект

[{eng: 'hello', ru: 'привет'}, {eng: 'ilia', ru: 'илья'}, {eng: 'hi', ru: 'привет'}]

let newArray = oldArray.map( el => {
return {
eng: el,
ru: translateIntoRu(el)
}
})

Рефакторинг

let newArray = oldArray.map( el => ({
eng: el,
ru: translateIntoRu(el)
}))

return {} - значит что на выходе мы создаем объект
то есть мы из массива строк получили массив объектов

Чаще всего перед нами будет стоять след задача
Будет дан массив объектов

[{eng: 'hello', ru: 'здравствуйте'}, {eng: 'ilia', ru: 'илья'}, {eng: 'hi', ru: 'привет'}]

а нам нужно получить массив jsx элементов

let newArray = oldArray.map( el => (<Message eng={el.eng} ru={el.ru}/>) )

[<Message eng='hello' ru='здравствуйте'/>, <Message eng='ilia' ru='илья'/>, <Message eng='hi' ru='привет'/>]

свойство объекта это атрибут компоненты и наоборот

let messagesItemData = [
{id: 1, name: 'ilia'},
{id: 2, name: 'oleg'},
{id: 3, name: 'ivan'},
{id: 4, name: 'anna'},
{id: 5, name: 'ilai'},
{id: 6, name: 'petr'},
];

let messageElements = messagesItemData.map( dialog => (
<MessageItem id={dialog.id} name={dialog.name}/>
));

Было

let messagesItemData = [
    {id: 1, name: 'ilia'},
    {id: 2, name: 'oleg'},
    {id: 3, name: 'ivan'},
    {id: 4, name: 'anna'},
    {id: 5, name: 'ilai'},
    {id: 6, name: 'petr'},
];

{/*<MessageItem name={messagesItemData[0].name} id={messagesItemData[0].id}/>*/}
{/*<MessageItem name={messagesItemData[1].name} id={messagesItemData[1].id}/>*/}
{/*<MessageItem name={messagesItemData[2].name} id={messagesItemData[2].id}/>*/}
{/*<MessageItem name={messagesItemData[3].name} id={messagesItemData[3].id}/>*/}
{/*<MessageItem name={messagesItemData[4].name} id={messagesItemData[4].id}/>*/}
{/*<MessageItem name={messagesItemData[5].name} id={messagesItemData[5].id}/>*/}

Стало

let messagesItemDataElements = messagesItemData.map( dialog => <MessageItem id={dialog.id} name={dialog.name}/>);

{messagesItemDataElements}

И сколько бы не было элементов эти 2 строки выше их обработают 

const Messages = () => {
   ----------------------- Данные с сервера ------------------------
    let messagesItemData = [
        {id: 1, name: 'ilia'},
        {id: 2, name: 'oleg'},
        {id: 3, name: 'ivan'},
        {id: 4, name: 'anna'},
        {id: 5, name: 'ilai'},
        {id: 6, name: 'petr'},
    ];

    let messageData = [
        {id: 1, message: 'push me'},
        {id: 2, message: 'and then just touch me'},
        {id: 3, message: 'till i can get my'},
        {id: 4, message: 'satisfaction!'},
        {id: 5, message: 'how are you doing?'},
        {id: 6, message: 'whatsss up?'},
    ];
  ----------------------- Данные с сервера ------------------------ 

  ----------------------- Получаем jsx элементы на основе полученных данных -------------------------

    let messagesItemDataElements = messagesItemData.map( companion => <MessageItem id={companion.id} name={companion.name}/>);
    let messageDataElements = messageData.map( dialogContent => <Message message={dialogContent.message}/>)

  ----------------------- Получаем jsx элементы на основе полученных данных -------------------------
  
  ----------------------- Отрисовываем jsx элементы ----------------
    
    return (
        <div className={messagesStyle.messages}>
            <div className={messagesStyle.messagesItems}>
                {messagesItemDataElements}
            </div>
            <div className={messagesStyle.messagesContent}>
                {messageDataElements}
            </div>
        </div>
    )
}

export default Messages
 
  ----------------------- Отрисовываем jsx элементы ----------------
  
по неймингу

массив называем множественным числом например posts а элемент к которому обращаемся через map - p
таким образом будет понятно что речь идет о посте

React 26 

ctrl+shift+n - найти файл по названию 

                                                                           BLL business logic layer
                                                                           уровень бизнес логики
UI User interface 
пользовательский интерфейс
React                                                                      Redux
Компонента принимает через пропсы входные данные
и на основе этих данных возвращает соответствующую
jsx разметку

Данные в React приходят из Business Logic Layer, некоторой части кода где эти данные хранятся
Layer - набор каких-то функций и файлов который отвечают за отрисовку user interface

BLL - набор файлов функций что отвечает за хранение данных
Данные приходят из BLL
В качестве BLL выступает Redux
Redux является логикой именно в redux будет храниться истина
и на базе этой истины будет перерисовываться user interface
redux - главный 
Задача UI просто отрисовывать компоненты
Как только в redux в BLL поменяются какие-то данные (состояние) 
профиль обновится компонента UI перерисуется

index.tsx - отдельный файл который в принципе к UI не относится 
это отдельный файл который является началом

UI Зависит от BLL

Так как у компоненты есть конкретная задача то в ней не должно быть данных
данные должны быть вне компонент
У компоненты есть конкретная функция на основе данных на входе отобразить jsx разметку 
это концепция чистых функций

Данные попадают по итогу в UI но они там не создаются а уже затем попадают в компоненту

React 28 

Компонента это чистая функция это значит что она может работать только с тем что к ней приходит в props
она не имеет права обращаться к некоторым глобальным вещам

Функция (компонента) работает только с тем что к ней приходит извне в качестве props

Выносим данные из компонент в файл index.tsx и затем прокидываем через props обратно

Данные: 

let postsData = [
{id: 1, message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
{id: 2, message: 'It is my first post',  likesCount: 7, disLikesCount: 2},
];

в теге App добавляем атрибут 

ReactDOM.render(<App postsData={postsData}/>, document.getElementById('root'));

Идём в App и типизируем полученные через атрибут данные

type AppType= {
postsData: Array<{id: number, message: string, likesCount: number, disLikesCount: number}>;
}

указываем наименование типизации в качестве параметра функции App

const App = (props: AppType) => {
   ...
   return ...
}

в теге Route

<Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>

указываем атрибут render={} и помещаем в него callback с необходимой нам компонентой, у которой через props
прокидываем наши затипизированные данные

<Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>

идём в Profile  и типизируем полученные через атрибут postsData={props.postsData} данные:

type ProfileType = {
postsData: Array<{id: number, message: string, likesCount: number, disLikesCount: number}>;
}

указываем наименование типизации в качестве параметра функции 

const Profile = (props: ProfileType) => {
    ...
    return ...
}

Прокидываем через props наши данные postsData в компоненту MyPosts

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

Типизируем

type MyPostsType = {
    postsData: Array<{id: number, message: string, likesCount: number, disLikesCount: number}>
}

Наименование в параметре 

const MyPosts = (props: MyPostsType) => {}

Обращаемся к данным через props - props.postsData.map данные проходят через метод map

let postsDataContent = props.postsData.map( p =>
    <Post message={p.message} likesCount={p.likesCount} disLikesCount={p.disLikesCount}/>
);

it works!

React 29

Выносим данные из index.js в отдельный файл state.tsx
так как по single responsibility index.tsx не должен быть местом где хранятся данные

У нас есть состояние state.tsx мы это состояние прокидываем в ui и оно там отрисовывается
state.tsx - BLL, из этого бизнес уровня мы берем состояние state.tsx и прокидываем его внутрь компонент
через пропсы и компоненты UI отрисовываются согласно состоянию
то есть какое состояние, state первичен, state - главный какое в нем состояние такой UI и получится

изменим state изменится и UI изменится картинка

Упаковываем наши 3 переменные с данными в 1 объект

let messagesItemData = [
{id: 1, name: 'ilia'},
{id: 2, name: 'oleg'},
{id: 3, name: 'ivan'},
{id: 4, name: 'anna'},
{id: 5, name: 'ilai'},
{id: 6, name: 'petr'},
];

let messageData = [
{id: 1, message: 'push me'},
{id: 2, message: 'and then just touch me'},
{id: 3, message: 'till i can get my'},
{id: 4, message: 'satisfaction!'},
{id: 5, message: 'how are you doing?'},
{id: 6, message: 'whatsss up?'},
];

let postsData = [
{id: 1, message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
{id: 2, message: 'It is my first post',  likesCount: 7, disLikesCount: 2},
];

->

let state = {
    messagesItemData: [],
    messageData: [],
    postsData: []
}

дадим этому объекту имя state (соответсвенно названию файла)

этот state мы прокинем внутрь index.js не через пропсы а просто через import
а уже дальше будем прокидывать через props в App
state пройдет browser router и в этот момент у state мы заберем messagesItemData messageData
и прокинем в messages.tsx потому что нет смысла этой компонента отдавать весь стейт
тоже самое и Profile.tsx туда пойдут только postsData   

Функции нужно давать только то что ей нужно - ничего лишнего, лишнее знание о системе

Чтобы система была контролируемая тестируемая предсказуемая нужно избавиться от всяких глобальных вещей
мы так делаем когда импортируем что-либо в файл из глобального мира
поэтому мы и прокидываем данные через props а не импортируем сразу же в нужную компоненту
импорт функции не считается потому что функцию как раз нужно вызывать в отличие от глобальных данных
данные не должны быть глобальными 

для данных создадим папку redux в src и в нее поместим наш стейт state.tsx
Далее в state.tsx поместим все данные которые у нас есть:

messagesItemData: [],
messageData: [],
postsData: []

помещаем все данные из всех переменных в одну переменную чтобы упростить import export

let state = {
    messagesItemData: [],
    messageData: [],
    postsData: []
}

state - объект. React - это функциональное программирование. объект - ООП. wtf.
В React присутствуют элементы ООП, в данный момент state - это не показатель ООП, 
в данный момент state это просто объект который просто содержит в себе какие-то данные.
Функциональное программирование не запрещает объекты. Объект это сложная структура данных.
Есть приммитивы: числа, строки, boolean. Есть структуры посложнее, массивы, объект.
Массив тоже является объектом.

В данный момент мы упаковали все данные в state like package.json

exportируем state по дефолу и импортируем его в index.tsx
и теперь вместо всех атрибутов App добавляем атрибут state={state}
можем называть appState={state}

и уже в App в атрибутах Messages указать messagesItemData={props.appState.messagesItemData}
Profile postsData={props.appState.posts}

_______________________________________________ Типизация state:

1 Типизируем в state.tsx каждый подобъект отдельно
Сначала находим в цепочке вложенности объекта объект с самой глубокой вложенностью, 
самый дальний по вложенности объект, и типизируем входящие в него пары ключ значение


_________________________________________1

let state = {
messagesItemData:  [
{id: 1, name: 'ilia'},
{id: 2, name: 'oleg'},
{id: 3, name: 'ivan'},
{id: 4, name: 'anna'},
{id: 5, name: 'ilai'},
{id: 6, name: 'petr'},
],
messageData: [
{id: 1, message: 'push me'},
{id: 2, message: 'and then just touch me'},
{id: 3, message: 'till i can get my'},
{id: 4, message: 'satisfaction!'},
{id: 5, message: 'how are you doing?'},
{id: 6, message: 'whatsss up?'},
],
postsData: [
{id: 1, message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
{id: 2, message: 'It is my first post',  likesCount: 7, disLikesCount: 2},
],
}

->

type MessagesItemDataType = {
id: number
name: string
}

type MessageDataType = {
id: number
message: string
}

type PostsData = {
id: number
message: string
likesCount: number
disLikesCount: number
}
________________________________________ 2

2 затем типизируем объект в состав которого входят массивы объектов с наименованиями которые мы создали выше
для каждого подобъекта

type ProfilePageType = {
    postsData: Array<PostsData>
}

type MessagesPage = {
    messagesItemData: Array<MessagesItemDataType>
    messageData: Array<MessageDataType>
}

Теперь у нас есть все типы объектов и под объектов которые есть у нас внутри этого state

_________________________________________ 3 

Дальше для проверки добавляем тип для state который мы собрали выше

type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPage
}

и прописываем этот тип для переменной state

let state: StateType = {}

Если ошибок нет двигаем дальше.

_________________________________________ 4

Импортируем state сразу в App и обращаемся к свойствам state без всяких props

import state from './redux/state'

<Messages messagesItemData={state.messagesPage.messagesItemData} messageData={state.messagesPage.messageData}/>}/>

Вопрос по типизации как прокинуть state импортированный в index через пропсы app как его описать и нужно ли

_______________________________________________ The end ____________________________________________________

Делаем структуру state разбивая все данные на ветки для каждой страницы profilePage: messagesPage:

let state: StateType = {
profilePage: {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
        {id: 2, message: 'It is my first post',  likesCount: 7, disLikesCount: 2},
        ],
},
messagesPage: {
    messagesItemData:  [
        {id: 1, name: 'ilia'},
        {id: 2, name: 'oleg'},
        {id: 3, name: 'ivan'},
        {id: 4, name: 'anna'},
        {id: 5, name: 'ilai'},
        {id: 6, name: 'petr'},
        ],
    messageData: [
        {id: 1, message: 'push me'},
        {id: 2, message: 'and then just touch me'},
        {id: 3, message: 'till i can get my'},
        {id: 4, message: 'satisfaction!'},
        {id: 5, message: 'how are you doing?'},
        {id: 6, message: 'whatsss up?'},
        ],
}
}

Таким образом мы разбиваем все данные постранично

_____________________________________________________________________________________________________________________

??? 
В App вместо <Profile postsData={state.profilePage.postsData}/>}/> передаем
<Profile postsData={state.profilePage}/>}/> - то есть передаем сразу все данные которые будут в будущем появлятся 
в state и будут относиться к profilePage, то есть указываем чтобы все данные которые мы укажем в 
state>profilePage 

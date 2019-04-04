var n = parseInt(prompt("Введіть номер завдання - "),'')

switch(n)
{
    case 1:
        var nn = parseInt(prompt("Введіть кількість елементів - "),'')
        var a = []

        for (let i = 0; i < nn; i++)
        {
            a[i] = parseInt(prompt(`Введіть a[${i + 1}] - `),'')
        } 

        document.write(`<p> ${a} </p>`)

        a.forEach((x, i, arr) => {if(x < 0) arr[i] = 0})

        document.write(`<p> ${a} </p>`)
        break

    case 2:
        var nn = parseInt(prompt("Введіть кількість цін - "),'')
        var price = []

        for (let i = 0; i < nn; i++) 
        {
            price[i] = parseInt(prompt(`Ціна${i + 1} - `),'')
        }

        var max_prise = parseInt(prompt("Максимальна ціна - "),'')

        document.write(`<p> ${price} </p>`)

        var b = price.filter(x => x < max_prise)

        document.write(`<p> ${b} </p>`)
        break

    case 3:
        var nn = parseInt(prompt("Введіть кількість цін - "),'')
        var price = []

        for (let i = 0; i < nn; i++) 
        {
            price[i] = parseInt(prompt(`Ціна${i + 1} - `),'')
        }

        document.write(`<p> ${price} </p>`)

        price.forEach((x, i, arr) => {if(x < 1000) arr[i] *= 1.2; if(x > 1000) arr[i] *= 0.7;})
        
        document.write(`<p> ${price} </p> `)
        break
    
    case 4:
        var nn = parseInt(prompt("Введіть кількість імен - "),'')
        var _name = []

        for (let i = 0; i < nn; i++) {
            _name[i] = prompt(("Введіть ім'я - "),'')            
        }

        var letter = prompt(("Введіть букву - "),'')

        document.write(`<p> ${_name} </p>`)

        var new_name = _name.filter(x => x[0]==letter[0])

        document.write(`<p> ${new_name} <p>`)
        break

    case 5:
        var nn = parseInt(prompt("Введіть кількість автомобілів - "),'')
        var cars = []

        for (let i = 0; i < nn; i++) {
            cars[i] = parseInt(prompt(`Введіть вагу ${i + 1}-го автомобіля - `),'')
        }

        var light = cars.every((x) => x <= 2000)

        if(light == true)
        {
            document.write("Всі автомобілі є легковими")
        }
        else
        {
            document.write("Не всі автомобілі є легковими")
        }
        break
    
    case 6:
        var user1 = []

        for (let i = 0; i < 7; i++) {
            user1[i] = parseInt(prompt(`Введіть кількість користувачів в ${i + 1}-ий день - `),'')
        }

        var days = user1.some((x) => x < 10)

        if(days == true) 
        {
            document.write("Були дні коли кількість користувачів була меншою за 10")
        }
        else
        {
            document.write("Не було днів коли кількість користувачів була меншою за 10")
        }
        break
    
    case 7:
        var arr = prompt("Введіть строку - ",'')
        var arr1 = arr.split("")

        var letter_a = 0
        arr1.forEach((x) => {if(x == "а") letter_a++})

        document.write(`Кількість букв 'а' - ${letter_a}`)
        break

    case 8:
        var nn = parseInt(prompt("Введіть кількість чисел - "),'')
        var number = []

        for (let i = 0; i < nn; i++) {
            number[i] = parseInt(prompt(`Введіть число №${i + 1} - `),'')
        }

        var product = 1
        number.forEach((x) => product *= x) 

        document.write(`Добуток = ${product}`)
        break

    case 9:
        var nn = parseInt(prompt("Введіть кількість чисел - "),'')
        var number = []

        for (let i = 0; i < nn; i++) {
            number[i] = parseInt(prompt(`Введіть число №${i + 1} - `),'')
        }

        var max = number[0]
        number.forEach((x, i, arr) => {if(x > max) max = arr[i]})

        document.write(`Максимальний елемент - ${max}`)
        break
}

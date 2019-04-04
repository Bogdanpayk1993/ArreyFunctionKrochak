var n = parseInt(prompt("Введіть номер завдання - "),'')

switch (n) {
    case 1:
        var nn = parseInt(prompt("Введіть кількість імен - "),'')
        var names = []

        for (let i = 0; i < nn; i++) {
            names[i] = prompt(`Введіть ім'я${i + 1} - `,'')
        }

        document.write(`<p> ${names} </p>`)

        names.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))

        document.write(`<p> ${names} </p>`)

        break

    case 2:
        var nn = parseInt(prompt("Введіть кількість товарів - "),'')
        var price = []

        for (let i = 0; i < nn; i++) {
            price[i] = parseInt(prompt(`Введіть ціну ${i + 1}-го товару - `),'')
        }

        document.write(`<p> ${price} </p>`)

        price.forEach((x, i, arr) => {if(x > 1000) arr[i] *= 0.8; else arr[i] *= 0.95})
        
        document.write(`<p> ${price} </p>`)

        break
    
    case 3:
        var nn = parseInt(prompt("Введіть кількість працівників - "),'')
        var workers = []

        for (let i = 0; i < nn; i++) {
            workers[i] = parseInt(prompt(`Введіть вік ${i + 1}-го працівника - `),'')
        }

        document.write(`<p> ${workers} </p>`)

        var workers1 = workers.filter((x) => x < 25)

        document.write(`<p> ${workers1} </p>`)

        break

    case 4:
        var nn = parseInt(prompt("Введіть кількість показів гемоглобіну - "),'')
        var arr = []

        for (let i = 0; i < nn; i++) {
            arr[i] = parseInt(prompt(`Введіть кількість гемоглобіну ${i + 1}-го паціента - `),'')
        }

        document.write(`<p> ${arr} </p>`)

        var arr1 = arr.filter((x) => x < 115)

        document.write(`<p> ${arr1} </p>`)

        break

    case 5:
        var nn = parseInt(prompt("Введіть кількість цін товарів - "),'')
        var price = []

        for (let i = 0; i < nn; i++) {
            price[i] = parseInt(prompt(`Введіть ціну ${i + 1}-го товару - `),'')    
        }

        document.write(`<p> ${price} </p>`)

        var price1 = price.filter((x) => x < 2000)

        document.write(`<p> ${price1} </p>`)
        break

    case 6:
        var nn = parseInt(prompt("Введіть кількість цін товарів - "),'')
        var price = []

        for (let i = 0; i < nn; i++) {
            price[i] = parseInt(prompt(`Введіть ціну ${i + 1}-го товару - `),'')    
        }

        document.write(`<p> ${price} </p>`)

        var sum = 0
        price.filter((x) => {if(x <= 2000 && x >= 1000) sum += x})

        document.write(`<p> Сума - ${sum} </p>`)
        break       

    case 7:
        var nn = parseInt(prompt(`Введіть кількість номерів автомобілів - `),'')
        var number = []

        for (let i = 0; i < nn; i++) {
            number[i] = prompt(`Введіть ${i + 1}-ий номер автомобіля - `,'')
        }

        document.write(`<p> ${number} </p>`)

        var number1 = number.filter((x) => x[0] == "a" && x[x.length - 1] == "p")

        document.write(`<p> ${number1} </p>`)
        break

    case 8:
        var letters = ["а","е","є","и","і","ї","о","у","ю","я"]
        var text = prompt("Введіть текст - ",'')
        var text_arr = text.split("")

        document.write(`<p> ${text} </p>`)
    
        var text_arr1 = (text_arr.filter((x) => letters.indexOf(x) > -1)).join("")

        document.write(`<p> ${text_arr1} </p>`)
        break
}
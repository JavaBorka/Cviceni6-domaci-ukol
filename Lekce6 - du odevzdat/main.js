//CVIČENÍ 1

// Bez použití knihovny dayjs napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:
// > parseDate('06.04.2021')
// { day: 6, month: 4, year: 2021 }


// Riešenie, ktoré ma napadlo ako prvé. Určite by bolo šikovnejšie s tým pracovať ako s objektom :)
const parseDate =(date) => {
    const day = Number(date.slice(0,2))
    const month = Number(date.slice(3,5))
    const year = Number(date.slice(6))
    const messageElement = document.querySelector('.message')
    messageElement.innerHTML = '{ day: ' + day + ', month: ' + month + ', year: ' + year + ' }'
}

parseDate('03.04.1985')

/* Ideální řešení
const parseDate = (datum) => {
	return {
		day: Number(datum.slice(0, 2)),
		month: Number(datum.slice(3, 5)),
		year: Number(datum.slice(6)),
	}
}

console.log(parseDate('03.04.1985'))
*/
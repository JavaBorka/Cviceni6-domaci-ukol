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

// CVIČENÍ 2

// Bez použití knihovny dayjs napište funkci formatDate, která na vstupu obdrží objekt představující datum v následujícím formátu.
// { day: 12, month: 3, year: 2015 }
// Funkce vrátí řetězec představující datum ve formátu DD.MM.YYYY.

const formatDate = (datum) => {
    
    /*
    const datum = {
        day: den,
        month: mesic,
        year: rok,
    }
    */

    den = datum.day;
    den = den.toString();
    mesic = datum.month;
    mesic = mesic.toString();
    rok = datum.year;
    rok = rok.toString();
    
    return den.padStart(2,"0") + '.' + mesic.padStart(2,"0") + '.' + rok

}

console.log(formatDate({ day: 3, month: 4, year: 2015 }))

// CVIČENÍ 3

// Jak jistě znalci jazyka Python dobře vědí, funkce round v tomto jazyce zaokrouhluje malinko jinak, než jsme zvyklí. Pokud je desetinná část čísla přesně 0.5, Python zaokrouhluje k nejbližšímu sudému číslu. JavaScriptová funkce Math.round naopak provádí zaokrouhlování způsobem, na který jste zvyklí, tedy pro 0.5 vždy nahoru. Někomu by se po po Pythonovském zaokrouhlování mohlo stýskat. Napište proto funkci jménem round, která bude zaokrouhlovat čísla na celé jednotky podle následujících pravidel.

// Pokud je desetinná část menší než 0.5, zaokrouhlujeme dolů.

// Pokud je desetinná část větší než 0.5, zaokrouhlujeme nahoru.

// Pokud je desetinná část přesně rovna 0.5, zaokrouhlujeme k sudému číslu. Tedy například 3.5 se zaokrouhlí na 4, naopak 2.5 se zaokrouhlí na 2.

// V tomto cvičení se vám může hodit funkce Math.trunc, která umí odříznout desetinnou část čísla.

const round = (number) => {
    const desetina = number - Math.trunc(number);
    const cele = Math.trunc(number);

    if (desetina < 0.5) {
        console.log('Zaorouhli smerem dolu')
        return Math.round(number)
    }
    if (desetina > 0.5) {
        console.log('Zaorouhli smerem nahoru')
        return Math.round(number)
    }
    if (desetina === 0.5) {
        console.log('Zaokrouhli k nejblizsimu sudemu cislu')
        const sude = cele/2;
        const zbytek = sude - Math.trunc(sude);

        if (zbytek === 0) {
            return number - 0.5
        } else {
            return number + 0.5
        }
    }
}

console.log(round(20.5))


import * as jspy from "./Src/jspy.js" 

const InsertElementos = document.getElementById('InsertElementos')

jspy.Componentes({
    Elemento: 'button',
    Valor: "Button pop",
    Tipo_De_Saida: 'html',
    Saida: InsertElementos,
    Comando: (setCommand, Valor) => setCommand.onclick = () => {
        alert(Valor)
    }
})

jspy.Componentes({
    Elemento: 'span',
    Valor: "Span pop",
    Tipo_De_Saida: 'html',
    Saida: InsertElementos,
    Comando: (setCommand, Valor) => setCommand.onclick = () => {
        alert(Valor)
    }
})

jspy.Componentes({
    Elemento: 'img',
    Tipo_De_Saida: 'html',
    Saida: InsertElementos,
    Atributo: (setAtribute) => setAtribute({
        src: 'https://static.vecteezy.com/system/resources/thumbnails/008/061/366/small/mount-assiniboine-with-cloud-flowing-through-in-autumn-forest-at-provincial-park-photo.jpg',
        alt: 'nada'
    }),
    Comando: (setCommand, Valor) => setCommand.onclick = () => {
        alert(Valor)
    }
})

jspy.Componentes({
    Elemento: 'audio',
    Tipo_De_Saida: 'html',
    Saida: InsertElementos,
    Atributo: (setAtribute) => setAtribute({
        src: '',
        controls: true
    }),
    Comando: (setCommand, Valor) => setCommand.onclick = () => {
        alert(Valor)
    }
})
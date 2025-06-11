/**
 *
 * @param {Object}   cfg                    Objeto de configuração.
 * @param {string}   cfg.Elemento  = 'div'  Tag HTML a criar.
 * @param {string}   cfg.Valor     = null   Texto interno (opcional).
 * @param {string}   cfg.Classe    = null   Classe CSS (opcional).
 * @param {string}   cfg.Tipo_De_Saida = 'html'  "html" ou "console".
 * @param {Element}  cfg.Saida     = document.body  Nó onde inserir (html).
 * @param {Function} cfg.Estilo    = null  Função que recebe um setter de estilos.
 * @param {Element}  cfg.Atributo  = Na tag HTML Nó onde inserir seus atributos.
 * @param {Function} cfg.Comando   = null Função que um setter de atributos.
*/
const Componentes = ({
    Elemento = null,
    Valor = null,
    Classe = null,
    Tipo_De_Saida = 'html',
    Saida = document.body,
    Estilo = null,
    Atributo = null,
    Comando = null
} = {}) => {
    // 1. Cria o elemento
    const el = document.createElement(Elemento)

    // 2. Conteúdo e classe (se existirem)
    if (Valor !== null) el.textContent = Valor
    if (Classe !== null) el.className = Classe

    // 3. Estilos (qualquer propriedade CSS)
    if (typeof Estilo === 'function') {
        Estilo((styles) => {
            Object.entries(styles).forEach(([prop, val]) => {
                // Se o valor é numérico e a propriedade não é unit-less (ex.: opacity), adiciona "px"
                const unitless = /^(opacity|zIndex|flexGrow|flexShrink)$/i.test(prop)
                el.style[prop] = (typeof val === 'number' && !unitless) ? `${val}px` : val
            })
        })
    }

    // 4. Atributo (qualquer atributo de tag HTML)
    if (typeof Atributo === "function") {
        Atributo((tributo) => {
            Object.entries(tributo).forEach(([prop, val]) => {
                el.setAttribute([prop], val)
            })
        })
    }

    // 5. Comando (qualquer comando de function)
    if (typeof Comando === "function") {
        Comando(el, Valor)
    }

    // 6. Saída
    switch (Tipo_De_Saida.toLowerCase()) {
        case 'html':
            Saida.appendChild(el)
            break
        case 'console':
            console.log(el)
            break
    }
}

export { Componentes }
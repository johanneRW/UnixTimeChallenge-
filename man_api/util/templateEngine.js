import fs from "fs"
import escape from "escape-html"


function renderPage(page, config={}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
                    .replace("$TAB_TITLE", config.tabTitle || "Mandatory")
                    .replace("$CSS_LINK", config.cssLink || "")
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()

    return navbar + page + footer
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString()
}


export default {
    renderPage,
    readPage,

}

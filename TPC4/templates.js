exports.compositoreslistPage = (slist, d) => {
    var pagHTML = `
        <!DOCTYPE html>
        <html>    
            <head>
                <meta charset="UTF-8">
                <link rel="icon" href="favicon.png">
                <link rel="stylesheet" href="w3.css">
                <title>Gestão de compositores</title>
            </head>
            <body>
                <div class="w3-card-4">
                    <header class="w3-container w3-teal">
                        <h1>Lista de compositores
                        <a class="w3-btn w3-round w3-grey" href="/compositores/registo">+</a>
                        </h1>
                    </header>

                    <div class="w3-container">
                        <table class="w3-table-all">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
    `
    for (let i = 0; i < slist.length; i++) {
        pagHTML += `
            <tr>
                <td>
                    ${slist[i].id}
                </td>
                <td>
                    <a href="/compositores/${slist[i].id}"> 
                        ${slist[i].nome} 
                    </a>
                </td>
                <td>
                    [<a href="/compositores/edit/${slist[i].id}">Editar</a>]
                    [<a href="/compositores/delete/${slist[i].id}">Eliminar</a>]
                </td>
            </tr>
        `
    }
    pagHTML += `
                        </table>
                    </div>
                        
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated by EngWeb2024 in ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            </body>
        </html>
    `

    return pagHTML
}

exports.periodosListPage = (list, d) => {
    var pagHTML = `
        <!DOCTYPE html>
        <html>    
            <head>
                <meta charset="UTF-8">
                <link rel="icon" href="favicon.png">
                <link rel="stylesheet" href="w3.css">
                <title>Lista de Períodos</title>
            </head>
            <body>
                <div class="w3-card-4">
                    <header class="w3-container w3-teal">
                        <h1>Lista de Períodos</h1>
                    </header>

                    <div class="w3-container">
                        <table class="w3-table-all">
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                            </tr>
    `

    for (let i = 0; i < list.length; i++) {
        pagHTML += `
            <tr>
                <td>
                    ${list[i].id}
                </td>
                <td>
                    <a href="/periodos/${list[i].id}"> 
                        ${list[i].periodo} 
                    </a>
                </td>
                <td>
                    [<a href="/periodos/edit/${list[i].id}">Editar</a>]
                    [<a href="/periodos/delete/${list[i].id}">Eliminar</a>]
                </td>
            </tr>
        `
    }
    pagHTML += `
                        </table>
                    </div>
                        
                </div>
                <footer class="w3-container w3-blue">
                    <h5>Generated by EngWeb2024 in ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            </body>
        </html>
    `

    return pagHTML
}

exports.compositorFormPage = function(d){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Compositor Form</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h2>Compositor Form</h2>
                </header>
            
                <form class="w3-container" method="POST">
                    <fieldset>
                        <legend>Dados</legend>
                        <label>Id</label>
                        <input class="w3-input w3-round" type="text" name="id"/>
                        <label>Nome</label>
                        <input class="w3-input w3-round" type="text" name="nome"/>
                        <label>Biografia</label>
                        <input class="w3-input w3-round" type="text" name="bio"/>
                        <label>Data de Nascimento</label>
                        <input class="w3-input w3-round" type="text" name="dataNasc"/>
                        <label>Data de Óbito</label>
                        <input class="w3-input w3-round" type="text" name="dataObito"/>
                        <label>Período</label>
                        <input class="w3-input w3-round" type="text" name="periodo"/>
                    </fieldset>
                    <br/>
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Register</button>
                </form>

                <footer class="w3-container w3-purple">
                    <h5>Generated by EngWeb2023 in ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            
            </div>
    `
}

exports.periodoFormPage = function(d){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>periodo Form</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h2>periodo Form</h2>
                </header>
            
                <form class="w3-container" method="POST">
                    <fieldset>
                        <legend>Dados</legend>
                        <label>Id</label>
                        <input class="w3-input w3-round" type="text" name="id"/>
                        <label>Periodo</label>
                        <input class="w3-input w3-round" type="text" name="periodo"/>
                    </fieldset>
                    <br/>
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Register</button>
                </form>

                <footer class="w3-container w3-purple">
                    <h5>Generated by EngWeb2023 in ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            
            </div>
    `
}

exports.compositorFormEditPage = function(a, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Compositor Form</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h2>Compositor Form</h2>
                </header>
            
                <form class="w3-container" method="POST">
                    <fieldset>
                        <legend>Metadata</legend>
                        <label>Id</label>
                        <input class="w3-input w3-round" type="text" name="id" readonly value="${a.id}"/>
                        <label>Name</label>
                        <input class="w3-input w3-round" type="text" name="nome" value="${a.nome}"/>
                    </fieldset>

                    <fieldset>
                        <legend>TPC</legend>
                    `

    pagHTML += `
                    </fieldset>  
                    <br/>
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Register</button>
                </form>

                <footer class="w3-container w3-purple">
                    <h5>Generated by EngWeb2023 in ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            
            </div>
    `
    return pagHTML
}

exports.periodoFormEditPage = function(a, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Student Form</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h2>Student Form</h2>
                </header>
            
                <form class="w3-container" method="POST">
                    <fieldset>
                        <legend>Metadata</legend>
                        <label>Id</label>
                        <input class="w3-input w3-round" type="text" name="id" readonly value="${a.id}"/>
                        <label>Name</label>
                        <input class="w3-input w3-round" type="text" name="periodo" value="${a.periodo}"/>
                    </fieldset>

                    `

    pagHTML += `
                    </fieldset>  
                    <br/>
                    <button class="w3-btn w3-purple w3-mb-2" type="submit">Register</button>
                </form>

                <footer class="w3-container w3-purple">
                    <h5>Generated by EngWeb2023 in ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            
            </div>
    `
    return pagHTML
}

// ---------------Compositor Page--------------------------------
exports.compositoresPage = function( compositor, d ){
    var pagHTML = `
    <html>
    <head>
        <title>Compositor: ${compositor.id}</title>
        <meta charset="utf-8"/>
        <link rel="icon" href="favicon.png"/>
        <link rel="stylesheet" href="w3.css"/>
    </head>
    <body>
        <div class="w3-card-4">
            <header class="w3-container w3-teal">
                <h1>Compositor ${compositor.nome}</h1>
            </header>

            <div class="w3-container">
                <ul class="w3-ul w3-card-4" style="width:50%">
                    <li><b>ID: </b> ${compositor.id}</li>
                    <li><b>Nome: </b> ${compositor.nome}</li>
                    <li><b>Biografia: </b> ${compositor.bio}</li>
                    <li><b>Data de Nascimento: </b> ${compositor.dataNasc}</li>
                    <li><b>Data de Obito: </b> ${compositor.dataObito}</li>
                    <li><b>Período: </b> ${compositor.periodo}</li>
                </ul>
            </div>
            <div class="w3-container w3-margin-8">
                <ul class="w3-ul">
            `
    
    pagHTML +=     `</ul></div>
            <footer class="w3-container w3-teal">
                <address>Gerado por gcompositor::RPCW2022 em ${d} - [<a href="/">Voltar</a>]</address>
            </footer>
        </div>
    </body>
    </html>
    `
    return pagHTML
}

// --------------Peridos Page ------------------------------

exports.periodosPage = function( periodo, d ){
    var pagHTML = `
    <html>
    <head>
        <title>periodo: ${periodo.id}</title>
        <meta charset="utf-8"/>
        <link rel="icon" href="favicon.png"/>
        <link rel="stylesheet" href="w3.css"/>
    </head>
    <body>
        <div class="w3-card-4">
            <header class="w3-container w3-teal">
                <h1>Periodo ${periodo.periodo}</h1>
            </header>

            <div class="w3-container">
                <ul class="w3-ul w3-card-4" style="width:50%">
                    <li><b>ID: </b> ${periodo.id}</li>
                    <li><b>Nome: </b> ${periodo.periodo}</li>
                </ul>
            </div>
            <div class="w3-container w3-margin-8">
                <ul class="w3-ul">
            `
    
    pagHTML +=     `</ul></div>
            <footer class="w3-container w3-teal">
                <address>Gerado por gperiodo::RPCW2022 em ${d} - [<a href="/">Voltar</a>]</address>
            </footer>
        </div>
    </body>
    </html>
    `
    return pagHTML
}

exports.errorPage = function(errorMessage, d){
    return `
    <p>${d}: Error: ${errorMessage}</p>
    `
}
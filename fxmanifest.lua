fx_version 'cerulean'
game 'gta5'

name 'bizman'
author 'livid46'
description 'gameplay/bizman'
version 'alpha/0.0.1'

client_script 'dist/client/*.client.js'
client_script 'client/*.client.js'
server_script 'dist/server/*.server.js'

ui_page 'client/index.html'

files {
    'client/index.html',
    'client/*.js',
    'client/styles.css',
    'client/favicon.ico',
    'assets/*'
}
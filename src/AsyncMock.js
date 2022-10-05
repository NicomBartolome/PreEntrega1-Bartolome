const productos = [
    {id: '1', title: 'Repetidor de red Wi-Fi TL-WA850RE', price: '$6639', pictureURL: 'https://static.tp-link.com/res/images/products/large/TL-WA850RE(AR)-01.jpg', categoria: 'Repetidores', description: 'Coloca el repetidor Wi-Fi cerca del router. A continuación presiona el botón WPS en el router y el botón Range Extender en el repetidor Wi-Fi para crear la extensión de la red. Una vez enlazados desenchufa el repetidor TL-WA850RE y llévalo a la habitación donde quieras mejorar la señal a internet.'},

    {id: '2', title: 'Adaptador USB WiFi TL-WN727N', price: '$1999', pictureURL: 'https://static.tp-link.com/TL-WN727N_EU_6.0-02_large_1550734301042w.jpg', categoria: 'Adaptadores', description: 'El Adaptador USB Inalámbrico N  TL-WN727N permite conectar una computadora de escritorio o portátil a una red inalámbrica y con acceso a la conexión a Internet de alta velocidad . Cumple con el estándar IEEE 802.11n, que proporciona velocidades inalámbrica de hasta 150 Mbps, lo cual es beneficioso para la transmisión de video HD y juegos en línea..'},

    {id: '3', title: 'Router WiFi TP-Link WR840N', price: '$3550', pictureURL: 'https://static.tp-link.com/TL-WR840N_UN_6.20_01_large_1533102945398q.jpg', categoria: 'Routers', description: 'TL-WR840N es compatible con IEE 802.11b / g / ny proporciona una solución de alta velocidad. Cumpliendo con el estándar IEEE802.11n, TL-WR840N puede entregar una velocidad de hasta 300Mbps, satisfaciendo tus necesidades de red doméstica más exigentes, como transmisión HD, juegos en línea y descarga de archivos grandes.'},

    {id: '4', title: 'Tapo C200 | Cámara Wi-Fi de Vigilancia', price: '$9999', pictureURL: 'https://static.tp-link.com/Tapo-C200_EU_1.0_1908_English_01_large_1568705560286u.png', categoria: 'Camaras', description: 'La cámara de vigilancia, activa 24 horas al día, envía una notificación al móvil en el momento que detecta movimiento en casa o en sus alrederores. De esta manera estarás al tanto de lo que ocurre en tu hogar'},

    {id: '5', title: 'Router Inalámbrico Banda Dual Alta Potencia de AC1350', price: '$13200', pictureURL: 'https://static.tp-link.com/Archer_C58HP(UN)1.0-01_1502939634421y.jpg', description: 'El Archer C60 incorpora el último estándar inalámbrico - 802.11ac. Este avanzado Wi-Fi está diseñado para actividades online de alto tráfico y llegando a conseguir que las aplicaciones funcionen al triple de velocidad que con el anterior estándar 802.11n. El resultado: Wi-Fi más rápido, más fuerte y más capaz de dar rienda a todos tus dispositivos inalámbricos.', categoria: 'Routers'},

    {id: '6', title: 'Extensor Powerline Wi-Fi AV600', price: '$7800', pictureURL: 'https://static.tp-link.com/TL-WPA4220EU4001large_15966788634544.jpg', categoria: 'Repetidores', description: 'Basado en la tecnología Powerline, su extensión de red nunca se limita a la cobertura principal de su enrutador. Con el avanzado HomePlug AV600, el KIT TL-WPA4221 transforma el circuito eléctrico existente de su hogar en una red de alta velocidad sin necesidad de nuevos cables o perforaciones y lleva la red cableada e inalámbrica a cualquier lugar donde haya una toma de corriente.'}
]

export const ObtenerProductos = (categoryName) => {
    return new Promise ((res) =>{
        setTimeout(() => {
            res(categoryName ? productos.filter(prdC => prdC.categoria === categoryName) : productos)
        }, 1000);
    }) 
}

export const ObtenerProducto = (id) => {
    return new Promise ((res) =>{
        setTimeout(() => {
            res(productos.find(prod => prod.id === id))
        }, 1000);
    })
}


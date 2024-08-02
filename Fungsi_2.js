const deretGeometri = function (suku_pertama, jumlah_suku, rasio) {
    console.log(rasio)
    if (rasio > 1) {
        console.log("tes")
        return (suku_pertama * ((rasio ** jumlah_suku) - 1) / (rasio - 1))
    }
    else {
        return (suku_pertama * (1 - (rasio ** jumlah_suku)) / (1 - rasio))
    }
}
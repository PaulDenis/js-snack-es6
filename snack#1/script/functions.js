const lightBike = (array) => {
    var lightBike = array[0];

    for (var i = 1; i < array.length; i++) {
        // Comparo ogni bici a quella precedente, salvando nella variabile qella più leggera di volta in volta.
        if (array[i].weight < lightBike.weight) {
            lightBike = array[i];
        }
    }
    return lightBike;
}
class DataRecorder {
    constructor() {
        this.dataArray = [];

        this.dataArray.push(["serial_number", "run", "input_device", "is_test_set", "block_number", "trial_number", "trial_id", "trial_category", "trial_gets_repeated", "click_category", "trial_repetitions", "username", "shape", "int_device",
            "ppi", "mm_in_pixel", "window_inner_width", "window_inner_height",
            "amplitude_mm", "amplitude_px", "start_size_mm", "start_size_px", "target_width_mm", "target_width_px", "target_height_mm", "target_height_px",
            "trial_direction", "trial_angle_degree", "start_center_x_px", "start_center_y_px", "target_center_x_px", "target_center_y_px",
            "start_click_touchdown_position_x_px", "start_click_touchdown_position_y_px", "start_click_touchup_position_x_px",
            "start_click_touchup_position_y_px", "target_click_touchdown_position_x_px", "target_click_touchdown_position_y_px",
            "target_click_touchup_position_x_px", "target_click_touchup_position_y_px", "click_distance_between_target_touchdown_touchup_px",
            "click_distance_to_start_center_touchdown_xy_px", "click_distance_to_start_center_touchdown_x_px", "click_distance_to_start_center_touchdown_y_px",
            "click_distance_to_start_center_touchup_xy_px", "click_distance_to_start_center_x_touchup_px", "click_distance_to_start_center_y_touchup_px",
            "click_distance_to_target_center_touchdown_xy_px", "click_distance_to_target_center_touchdown_x_px", "click_distance_to_target_center_touchdown_y_px",
            "click_distance_to_target_center_touchup_xy_px", "click_distance_to_target_center_x_touchup_px", "click_distance_to_target_center_y_touchup_px",
            "total_clicks_amount", "clicks_amount_after_start_click",
            "click_time_from_start_to_target_ms", "start_click_time_touchdown_to_touchup_ms", "target_click_time_touchdown_to_touchup_ms"]);
    }

    addDataRow(data) {
        this.dataArray.push(data);
    }

    getDataArray() {
        return this.dataArray;
    }

generateCsvDownloadLink(isDownload) {
    const csvContent = this.dataArray.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], {type: 'text/csv'});
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.csv';

    // Entfernt die Zeile, die den Link zum Dokumentenkörper hinzufügt
    // this.printDownloadableCsvFileToConsole(link);

    if (isDownload) {
        // Führt den Download durch, ohne den Link zum Dokumentenkörper hinzuzufügen
        link.style.display = 'none'; // Versteckt den Link
        document.body.appendChild(link); // Fügt den Link hinzu, um den Download zu ermöglichen
        link.click(); // Simuliert einen Klick auf den Link
        document.body.removeChild(link); // Entfernt den Link sofort wieder
    }
}

// Diese Methode kann entfernt werden, wenn Sie nicht mehr benötigt wird
printDownloadableCsvFileToConsole(link) {
    console.log('CSV Download Link:', link.href);
}
    
    downloadGeneratedCsvFile(link) {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

 

    publishCsvToServer() {
        const jsonData = this.dataArray.map(row => row.join(',')).join('\n');

        fetch(Config.serverRequestLink, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: jsonData,
        })
            .then(response => response.text())
            .then(data => console.log(data)) // server response
            .catch(error => console.error("Error fetching request: " + error));
    }
}

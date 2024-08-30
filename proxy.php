<?php
if (isset($_GET['url'])) {
    $url = filter_var($_GET['url'], FILTER_VALIDATE_URL);

    if ($url) {
        // Initialize a cURL session
        $ch = curl_init();

        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

        // Execute the request and fetch the response
        $response = curl_exec($ch);

        // Get HTTP response code
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        // Close the cURL session
        curl_close($ch);

        if ($http_code == 200) {
            echo $response;
        } else {
            echo "Error: Unable to fetch the requested page.";
        }
    } else {
        echo "Invalid URL.";
    }
} else {
    echo "No URL provided.";
}
?>

// Configuration for API URLs

(function () {

    const isProduction =
        window.location.hostname !== 'localhost' &&
        !window.location.hostname.includes('127.0.0.1') &&
        !window.location.hostname.includes('file://');

    if (isProduction) {

        // Production
        window.ENV_API_URL = 'https://backend-calmspace-2.onrender.com';

        // ML Flask URL
        window.ML_API_URL = 'https://backend-calmspace-3.onrender.com/predict_emotion';

        console.log('Running in production mode');

    } else {

        // Local development
        window.ENV_API_URL = 'http://localhost:5001';

        // Local Flask ML server
        window.ML_API_URL = 'http://localhost:5000';

        console.log('Running in development mode');
    }

    console.log('Backend API URL:', window.ENV_API_URL);
    console.log('ML API URL:', window.ML_API_URL);

    // Global config
    window.ENV_CONFIG = {

        // Express backend
        backendApiUrl: window.ENV_API_URL,

        // Flask ML route
        mlServiceUrl: window.ML_API_URL + '/predict_emotion'
    };

})();
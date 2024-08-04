/*** Fill in your information
 * Name: Dina Boshnaq
 * Class: 3ACS
 * Application Name: AirBnb in Urban Governanace
 */

//Change to your Qlik Sense Tenant
var config = {
    host: 'gxrk19ktae6r9pk.eu.qlikcloud.com',
    prefix: '/',
    port: 443,
    isSecure: true,
    webIntegrationId: 'OI2ORk8XbULxWM6Zt6RO4oTuU6txdzzc'
};

//*********************DO NOT CHANGE**************************** */
//Redirect to login if user is not logged in
async function login() {
    function isLoggedIn() {
        return fetch("https://" + config.host + "/api/v1/users/me", {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'qlik-web-integration-id': config.webIntegrationId,
            },
        }).then(response => {
            return response.status === 200;
        });
    }
    return isLoggedIn().then(loggedIn => {
        if (!loggedIn) {
            window.location.href = "https://" + config.host + "/login?qlik-web-integration-id=" + config.webIntegrationId + "&returnto=" + location.href;
            throw new Error('not logged in');
        }
    });
}
login().then(() => {
    require.config({
        baseUrl: (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources",
        webIntegrationId: config.webIntegrationId
    });
    //Load js/qlik after authentication is successful

    //Load js/qlik after authentication is successful
    require(["js/qlik"], function (qlik) {
        qlik.on("error", function (error) {
            $('#popupText').append(error.message + "<br>");
            $('#popup').fadeIn(1000);
        });
        $("#closePopup").click(function () {
            $('#popup').hide();
        });
        //*********************DO NOT CHANGE**************************** */

        //*********************CHANGE HERE***************************** */

        //Make a connection to your application
        var app = qlik.openApp('6e9c9ac9-fe56-48ef-9440-cd8196ef4148', config);

        //Embed visualizations into your webpage

        // First Sheet
        // Number of airbnbs in a KPI
        app.visualization.get('dPZCbKP').then(function (vis) {
            vis.show("QV01");
        });

        // Second Sheet
        // Heatmap of total number of airbnbs in each city
        app.visualization.get('THSPSm').then(function (vis) {
            vis.show("QV02");
        });
        // Pie chart with percentages per city/room type
        app.visualization.get('LAQzabs').then(function (vis) {
            vis.show("QV03");
        });
        // Table with city name/room type, number of airbnbs, percentage
        app.visualization.get('JwEmpXm').then(function (vis) {
            vis.show("QV04");
        });

        // Third Sheet
        // Filter pane for cities
        app.visualization.get('ULZEUqF').then(function (vis) {
            vis.show("QV05");
        });
        // KPI total number of hosts in city
        app.visualization.get('KrQbJ').then(function (vis) {
            vis.show("QV06");
        });
        // KPI total number of airbnbs in city
        app.visualization.get('ckBpYhj').then(function (vis) {
            vis.show("QV07");
        });
        // Bar chart number of hosts owning 1,2,3,4+ properties
        app.visualization.get('JpJdL').then(function (vis) {
            vis.show("QV08");
        });
        // KPI maximum number of properties managed by 1 host (1st and 2nd place)
        app.visualization.get('dYjhzRG').then(function (vis) {
            vis.show("QV09");
        });
        // Table top 3 hosts with most airbnb properties
        app.visualization.get('NKAbLm').then(function (vis) {
            vis.show("QV010");
        });


        // Fourth Sheet
        // Bar chart with host type (individual, family/group)
        app.visualization.get('jQrjeW').then(function (vis) {
            vis.show("QV011");
        });
        // Pie chart verified vs unverifies hosts
        app.visualization.get('JtJsPmV').then(function (vis) {
            vis.show("QV012");
        });
        // KPI total number of family/co-owners hosts
        app.visualization.get('GpcHJXP').then(function (vis) {
            vis.show("QV013");
        });
        // KPI total number of hotels/establishment hosts
        app.visualization.get('ctZjVP').then(function (vis) {
            vis.show("QV014");
        });
        // KPI total number of unverified hosts
        app.visualization.get('zuvRYjA').then(function (vis) {
            vis.show("QV015");
        });
        // KPI total number of listings owned by unverified hosts
        app.visualization.get('rPcWBN').then(function (vis) {
            vis.show("QV016");
        });
        // Table hotel names, city name, number of airbnbs
        app.visualization.get('Ytysh').then(function (vis) {
            vis.show("QV017");
        });
        // Table family/group owner names, city name, number of airbnbs
        app.visualization.get('ZGqcmGB').then(function (vis) {
            vis.show("QV018");
        });


        // Fifth Sheet
        // Bar chart 365 or seasonal
        app.visualization.get('PUHkES').then(function (vis) {
            vis.show("QV019");
        });
        // Line chart of available airbnb listings in each month
        app.visualization.get('EAmYbr').then(function (vis) {
            vis.show("QV020");
        });
        // Scatter plot of average prices of year round available airbnbs
        app.visualization.get('rfUJFd').then(function (vis) {
            vis.show("QV021");
        });
        // KPI of most number of listings being in august
        app.visualization.get('jtAZrjN').then(function (vis) {
            vis.show("QV022");
        });
        // KPI of least number of listings being in april
        app.visualization.get('VvvfH').then(function (vis) {
            vis.show("QV023");
        });
        // Table with top 3 neighbourhoods in availability
        app.visualization.get('xYpAA').then(function (vis) {
            vis.show("QV024");
        });
        // Table with bottom 3 neighbourhoods in availability
        app.visualization.get('vuntF').then(function (vis) {
            vis.show("QV025");
        });


        // Sixth Sheet
        // Filter pane for cities
        app.visualization.get('XqgYcX').then(function (vis) {
            vis.show("QV026");
        });
        // KPI for average airbnb price
        app.visualization.get('QYvJBPj').then(function (vis) {
            vis.show("QV027");
        });
        // KPI for average airbnb price
        app.visualization.get('QYvJBPj').then(function (vis) {
            vis.show("QV027B");
        });
        // KPI for maximum airbnb price
        app.visualization.get('dpqhrq').then(function (vis) {
            vis.show("QV028");
        });
        // KPI for minimum airbnb price
        app.visualization.get('VSwkQmG').then(function (vis) {
            vis.show("QV029");
        });
        // Boxplot for price (exact price) by city/room type
        app.visualization.get('MdLjwd').then(function (vis) {
            vis.show("QV030");
        });
        // Distribution plot of top 5 neighbourhoods by average airbnb price
        app.visualization.get('NbvKJL').then(function (vis) {
            vis.show("QV031");
        });

        //Clear Selection function 

        // Custom button for clearing selections
        document.getElementById('clearSelectionsButton').addEventListener('click', function () {
            app.clearAll(); // Clears all selections
            // You can also clear specific fields using app.field('FieldName').clear();
        });


        //*********************CHANGE HERE***************************** */
    });
});
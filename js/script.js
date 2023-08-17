'use strict';

function copyrightDate() {
    const test2 = new Date();
    const year = test2.getFullYear();
    document.getElementById('my-copyright').innerHTML = `Copyright &#169 ${year} All Rights Reserved | Dima Batalshikov`;
}

copyrightDate();
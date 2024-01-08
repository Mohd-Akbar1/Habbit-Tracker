let Currentstatus = document.querySelectorAll('.tableStatus')
        console.log(Currentstatus)
        Currentstatus.forEach((ele) => {
            if (ele.innerText === 'Complete') {
                ele.style.color = 'blue'
            } else if (ele.innerText === 'Incomplete') {
                ele.style.color = 'red'
            } else {
                ele.style.color = 'black'
            }
            console.log('hh')
        })
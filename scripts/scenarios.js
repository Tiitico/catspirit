const scenario1 = document.querySelector('#scenario1')

const scenario2 = document.querySelector('#scenario2')
let scenario1position =0 
let scenario2position = 100
let scenario1started = false
let scenario2started = false
let scenariomv = moving*0.8
function scenario1moving() {
    scenario1.style.display = 'flex'
    scenario1started = true
if (lifestats>0) {
    scenariomv = movctrl*0.8
}else{
    scenariomv *=0.96
}
    if (scenario1position > -540.5) {
        if (pause === false ) {
            if (scenario1position<=-439) {
                if (scenario2started === false) {
                    scenario2.style.display = 'none'
                    scenario2moving()
                }
            }
            scenario1position -= scenariomv;
        }
requestAnimationFrame(scenario1moving)
} else {
scenario1position = 99.99; 
scenario1started = false
}
    scenario1.style.left = `${scenario1position}%`

    }

function scenario2moving() {
    scenario2.style.display = 'flex'
    scenario2started = true
    if (lifestats>0) {
        scenariomv = moving*0.8
    }else{
        scenariomv *=0.97
    }
            if (scenario2position > -540.5) {
            if (pause === false ) {
                if (scenario2position<=-439) {
                    if (scenario1started === false) {
                        scenario1.style.display = 'none'
                        scenario1moving()

                    }
                }
                scenario2position -= scenariomv;
            }
    requestAnimationFrame(scenario2moving)
    } else {
    scenario2position = 99.99; 
    scenario2started = false
    }
        scenario2.style.left = `${scenario2position}%`
    
}



function start() {
    addScore()
    runanimations()
    skincontrol()
    rotations()
    aceleration()
    obchoce()
    bonusmoving()
    bosscontroller()
scenario1moving()
}
statsupdate()
function startanimation() {
    setTimeout(()=>{
    d1.style.transition = '800ms'
    d2.style.transition = '800ms'
    d3.style.transition = '800ms'
    d4.style.transition = '800ms'

    d1.style.left = '-41.5%'
    d2.style.left = '58.96%'
    d3.style.right = '58.96%'
    d4.style.right = '-41.5%'

    d1.style.top = '90%'
    d2.style.top = '-172.5%'
    d3.style.bottom = '-172.5%'
    d4.style.bottom = '90%' 
setTimeout(()=>{
start()
setTimeout(()=>{
    d1.style.display="none"
    d2.style.display="none"
    d3.style.display="none"
    d4.style.display="none" 
},400)
},300)
    },400)


}
startanimation()

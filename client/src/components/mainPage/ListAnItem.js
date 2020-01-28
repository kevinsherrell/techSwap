import React, {useState, useEffect} from 'react'

function ListAnItem() {
    const [mobile, setMobile] = useState(false)
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth)
    const mobileToggle = (e)=>{
        // e.preventDefault()
        if(browserWidth < 767){
            setMobile(!mobile)
        }
        console.log(mobile)
    }
    const browserWidthListener = (e)=>{
        window.addEventListener('resize', ()=>{
            setBrowserWidth(window.innerWidth)
            console.log(browserWidth)
        })
    }

    useEffect(()=>{
        browserWidthListener()

    })
    console.log(window.innerWidth)
    return (
        <section className="list-an-item">
            <div className="container" onClick={mobileToggle}>
                {browserWidth < 650  && (
                    <a className={'list-an-item__link'} href={""}>List an item!</a>
                )}
            </div>
        </section>
    )
}

export default ListAnItem;
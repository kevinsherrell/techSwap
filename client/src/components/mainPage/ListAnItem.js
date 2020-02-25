import React from 'react'

class ListAnItem extends React.Component {
    state={
        mobile: false,
        browserWidth: window.innerWidth,
    }


     mobileToggle = (e)=>{
        if(this.state.browserWidth < 767){
            this.setState({
                mobile: !this.state.mobile
            })
        }

    }
     browserWidthListener = (e)=>{
        window.addEventListener('resize', ()=>{
            this.setState({
                browserWidth: window.innerWidth
            })
        })
    }
    componentDidMount() {
        this.browserWidthListener()
    }


    render(){
        return (
            <section className="list-an-item">
                <div className="container" onClick={this.props.togglePostItem}>
                    {this.state.browserWidth < 650  && (
                        <a className={'list-an-item__link'} href={""}>List an item!</a>
                    )}
                </div>
            </section>
        )
    }

}

export default ListAnItem;
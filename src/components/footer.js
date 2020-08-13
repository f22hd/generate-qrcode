import React from 'react';

const links = [
    {
        url:'http://allebdi.me/tech-products',
        text:'منتجات أخرى'
    },
    {
        url:'http://allebdi.me',
        text:'المدونة'
    }
]

function Footer(){

        return (<footer className='display-flex'>
                <hr />
                <div className='row justify-content-center my-auto'>
                    <div className='col-12 display-flex my-auto'>
                        <ul className='text-center'>
                            {links.map(({url,text},index) => {
                                return <li key={index}>
                                    <a target='_blank' rel="noopener noreferrer" className='text-secondary' href={url}>{text}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
          </footer>)
}

export default Footer;
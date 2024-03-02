import React from 'react'
import './footer.css'

function Footer() {
    
    return (
        <footer className=' grid md:grid-cols-3 grid-cols-1 gap-10 mx-10 py-10'>
            <div>
                <h1 className='text-xl font-bold mb-2'>ABOUT THE SHOP</h1>
                <p>At TitanFall, we are redefining the world of online fashion with our commitment to providing high-quality clothing at remarkably affordable prices. Our mission is simple: to empower you to embrace your unique style without compromising on quality or your budget.</p>
            </div>
            <div className='md:ml-5'>
            <h1 className='text-xl font-bold mb-2 '>Help</h1>
                <ul> 
                   
                    <li>FAQ</li>
                    <li>Returns</li>
                    <li>Care Instructions</li>
                    <li>Email Support</li>
                    <li>Changing or Modifying Order</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Return Policy</li>
                    <li>International Shipping Policy</li>
                </ul>
            </div>
            <div>
                <h1 className='mb-2 text-xl font-bold'>Contact us</h1>
                <p>For any hindrance in using our services hit us up</p>
                <form action="" className='flex flex-col gap-3 mt-6' id="contactform">
                    <input type="email" placeholder='Enter your email'/>
                    <textarea name="" id="" cols="40" rows="5"  placeholder='Enter your query'></textarea>
                    <button className=' my-6 bg-black text-white py-1.5 px-4 w-fit '>Submit</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer
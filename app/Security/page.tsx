import React from 'react'

const Security = () => {
  return (
    <div className='p-16 pt-20'>
    <div >
     <h1 className='text-[30px] font-bold text-gray-600 mb-6'>Security @ Cars24</h1>
     <p className='text-gray-400'>CARS24 is a next-generation eCommerce platform for pre-owned cars. We provide the best in class experience for car buyers by offering a wide assortment of certified cars that are home delivered with a click of a button while sellers get the best price of their vehicles in less than 1 hour.</p>
     <p className='text-gray-400 mt-4'>Cars24 is committed to working with security experts across the globe to stay up to date with the latest security techniques & vulnerabilities, Feel free to inspect applications. If you have discovered a security issue that you believe we should know about, we’d welcome working with you. Please let us know about it and we'll make every effort to quickly correct the issue.
     </p>
     <p className='text-gray-400 mt-4'>Check out the list of researchers that were provided with the <span className='text-primary-blue'>Hall of Fame</span>
    </p>
    </div>
    <div className='mt-6' >
     <h1 className='text-[30px] font-bold text-gray-600 mb-6'>Vulnerability Disclosure Policy</h1>
   
      <ul className='text-gray-400'>
        <li>We recommend reporting the discovered vulnerabilities to us before disclosing them publicly.</li>
        <li>We recommend not disclosing any business information or user information to the public, any such information found shall be reported to the security email, found at the bottom of this page, on an immediate basis.</li>
        <li>Do not access or modify our data or our users' data, without explicit permission from us. Only interact with your own accounts or test accounts for security research purposes.</li>
        <li>Contact us immediately if you do inadvertently encounter user data. Do not view, alter, save, store, transfer, or otherwise access the data, and immediately purge any local information upon reporting the vulnerability.</li>
        <li>Provide us with a reasonable amount of time to resolve the issue.</li>
        <li>Act in good faith to avoid privacy violations, destruction of data, and interruption or degradation of our services (including denial of service).</li>
      </ul>
   
    </div>
    <div className='mt-6' >
     <h1 className='text-[30px] font-bold text-gray-600 mb-6'>Testing:</h1>
     
      <ul className='text-gray-400'>
        <li>Please do not attempt to compromise the safety or privacy of the users of CARS24.</li>
        <li>We request you not use vulnerability testing tools or any automated scanners that generate a significant volume of incoming traffic which may cause any disruption to our applications or services.</li>
        <li>We also request not to run any DoS attacks on any of the applications or endpoints during this engagement.</li>
       </ul>
    </div>
    <div className='mt-6' >
     <h1 className='text-[30px] font-bold text-gray-600 mb-6'>Out Of Target Range</h1>
<p className='text-gray-400'>Actions/areas that are explicitly NOT considered to be in-scope:</p>
      <ul className='text-gray-400'>
        <li>Knowingly posting, transmitting, uploading, linking to, sending or storing any Malicious Software; or</li>
        <li>Attempting to social engineer support staff; or</li>
        <li>Testing in a manner that would result in the sending of unsolicited or unauthorised junk mail, spam, pyramid schemes or other forms of duplicative or unsolicited messages; or</li>
        <li>Testing in a manner that would degrade the operation of the Service; or</li>
        <li>Testing or otherwise accessing or using the Service from any jurisdiction that is a Prohibited Jurisdiction; or</li>
        <li>Testing third-party applications or websites or services that integrate with or link to the Service.</li>
       </ul>
    </div>
    </div>
  )
}

export default Security

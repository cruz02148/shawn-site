import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer_address'>
        <p>303 Wyman Street</p>
        <p>Suite 300</p>
        <p>Waltham, MA 02451</p>
      </div>
      <p><a href="tel:617-306-2955">617-306-2955</a></p>
      <p><a href="mailto:advisory@birchfp.com">advisory@birchfp.com</a></p>
      <small>
      &copy; 2021 Birch Financial Partners
      McAdam LLC dba Birch Financial Partners is an SEC registered investment adviser that maintains a principal place of business in the State of Pennsylvania. The Firm may only
      transact business in those states in which it is notice filed or qualifies for a corresponding exemption from such requirements. For information about Mcadam LLC Dba Birch
      Financial Partners registration status and business operations, please consult the Firm’s Form ADV disclosure documents, the most recent versions of which are available on the
      SEC’s Investment Adviser Public Disclosure website at www.adviserinfo.sec.gov.
      </small>
    </footer>
  )
}

export default Footer

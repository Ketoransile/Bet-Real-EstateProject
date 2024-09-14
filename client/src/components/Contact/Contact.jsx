// import React from "react";
// import "./Contact.css";
// import { MdCall } from "react-icons/md";
// import { BsFillChatDotsFill } from "react-icons/bs";
// import { HiChatBubbleBottomCenter } from "react-icons/hi2";
// const Contact = () => {
//   return (
//     <div id="contact-us" className="c-wrapper">
//       <div className="paddings innerWidth flexCenter c-container">
//         {/* left side */}
//         <div className="flexColStart c-left">
//           <span className="orangeText">Our Contact Us</span>
//           <span className="primaryText">Easy to contact us</span>
//           <span className="secondaryText">
//             We are always ready to assist by providing you with the best
//             services. We believe that a great place to live can significantly
//             improve your quality of life.
//           </span>

//           <div className="flexColStart contactModes">
//             {/* first row */}
//             <div className="flexStart row">
//               <div className="flexColCenter mode">
//                 <div className="flexStart">
//                   <div className="flexCenter icon">
//                     <MdCall size={25} />
//                   </div>
//                   <div className="flexColStart detail">
//                     <span className="primaryText">Call</span>
//                     <span className="secondaryText">+251910161737</span>
//                   </div>
//                 </div>
//                 <div className="flexCenter button">Call now</div>
//               </div>

//               <div className="flexColCenter mode">
//                 <div className="flexStart">
//                   <div className="flexCenter icon">
//                     <BsFillChatDotsFill size={25} />
//                   </div>
//                   <div className="flexColStart detail">
//                     <span className="primaryText">Chat</span>
//                     <span className="secondaryText">+251964347926</span>
//                   </div>
//                 </div>
//                 <div className="flexCenter button">Chat now</div>
//               </div>
//             </div>

//             {/* second row */}
//             <div className="flexStart row">
//               <div className="flexColCenter mode">
//                 <div className="flexStart">
//                   <div className="flexCenter icon">
//                     <BsFillChatDotsFill size={25} />
//                   </div>
//                   <div className="flexColStart detail">
//                     <span className="primaryText">Video Call</span>
//                     <span className="secondaryText">+251988734632</span>
//                   </div>
//                 </div>
//                 <div className="flexCenter button">Video Call now</div>
//               </div>

//               <div className="flexColCenter mode">
//                 <div className="flexStart">
//                   <div className="flexCenter icon">
//                     <HiChatBubbleBottomCenter size={25} />
//                   </div>
//                   <div className="flexColStart detail">
//                     <span className="primaryText">Message</span>
//                     <span className="secondaryText">+251973298132</span>
//                   </div>
//                 </div>
//                 <div className="flexCenter button">Message now</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* right side */}
//         <div className="flexEnd c-right">
//           <div className="image-container">
//             <img src="./contact.jpg" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We are always ready to assist by providing you with the best
            services. We believe that a great place to live can significantly
            improve your quality of life.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+251910161737</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+251910161737">Call now</a>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+251964347926</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://wa.me/251964347926">Chat now</a>
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+251988734632</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://zoom.us/j/meetingID">Video Call now</a>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+251973298132</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="sms:+251973298132">Message now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Contact us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

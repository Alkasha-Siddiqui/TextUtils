// import React, { useState } from 'react'

export default function About(props) {


  // const [mystyle, setMystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // })

  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const [btnstyle, setBtnStyle] = useState({
  //   color:"white",
  //   backgroundColor:"black"
  // })

  // const toggleState = () => {
  //   if (mystyle.color === "black") {
  //     setMystyle({
  //       color: "white",
  //         backgroundColor: "black"
  //     })

  //     setBtnStyle({
  //       color: "black",
  //         backgroundColor: "white"
  //     })

  //     setBtnText("Enable Light Mode")
  //   } else {
  //     setMystyle({
  //       color: "black",
  //         backgroundColor: "white"
  //     })

  //     setBtnStyle({
  //       color: "white",
  //         backgroundColor: "black"
  //     })
  //     setBtnText("Enable Dark Mode")

  //   }

  // }

  let mystyle = {
    color: props.mode ==='light'?'#042743':'white',
    backgroundColor: props.mode ==='light'?'white':'#042743'
  }
 

return (
  <div className='container' style={mystyle} >
    <h2 className="my-4">About</h2>

    <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>

      <div className="accordion-item" style={mystyle}>

        <h2 className="accordion-header" >
          <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <strong>Easy Text Manipulator</strong>
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab necessitatibus doloribus dolore quia odio assumenda provident vero repellat! Accusantium voluptatum distinctio illo accusamus? Placeat natus, excepturi, consequuntur unde alias nulla architecto suscipit incidunt assumenda repellat facere explicabo quisquam voluptate at minima? Consequatur ipsum hic quo asperiores fugiat est autem, sequi illum? Non, fugit? Esse, qui unde dignissimos perspiciatis magni odio velit earum, commodi, impedit molestiae ex deserunt aperiam repudiandae! Quaerat voluptas tenetur hic, fugiat repellat facere dolore minus obcaecati error ea, eos doloribus velit nihil. Iste dolores tempore, praesentium minima fugiat id soluta eveniet nam, numquam corporis repellat exercitationem.</div>
        </div>

      </div>

      <div className="accordion-item" style={mystyle}>

        <h2 className="accordion-header">
          <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          <strong>Free to use</strong>
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempore at non dolorum autem laborum deserunt numquam beatae debitis ut. Veritatis veniam minus nemo eligendi placeat et esse possimus, quasi consequatur explicabo vel sed obcaecati eveniet autem repudiandae nihil dolore velit suscipit magni, ea laborum quam, accusamus voluptas? Sequi impedit earum harum. Reiciendis facilis vitae alias soluta magni architecto quos, iusto laborum odio eaque laudantium sint itaque accusamus dolorum nostrum veniam perspiciatis facere velit molestiae cupiditate officia qui iure! Aspernatur, mollitia fugit tempore itaque iste commodi, minus harum suscipit, placeat pariatur officiis! A laudantium excepturi doloremque, deleniti quod impedit id!</div>
        </div>

      </div>

      <div className="accordion-item" style={mystyle}>

        <h2 className="accordion-header">
          <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          <strong>Browser Compatible</strong>
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto repellendus unde est voluptas sit consectetur laboriosam officia modi delectus, provident pariatur quia distinctio quae voluptatibus adipisci rerum tempore maxime dolore. Sapiente qui molestias nihil porro vero! Aspernatur nam unde consequatur, modi in non corporis maxime nemo cupiditate nobis, recusandae, veniam accusamus temporibus tempore laborum amet atque. Exercitationem quisquam cupiditate laudantium quasi quas numquam neque perferendis. Eaque excepturi quibusdam, dolorem aspernatur rerum recusandae natus similique ad nisi tenetur minima fuga dolorum vero numquam! Quisquam dolorum, sint vitae sed accusamus debitis nam ea temporibus aut ducimus iusto, illo pariatur omnis repellat dolor!</div>
        </div>

      </div>

    </div>
    {/* <button type="button" onClick={toggleState} className="my-4" style={btnstyle}>{btnText}</button> */}

  </div>
)
}

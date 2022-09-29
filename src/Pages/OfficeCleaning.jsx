import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import experience from '../components/assets/images/mask_1.png';
import service from '../components/assets/images/mask_2.png';
import bonded from '../components/assets/images/mask_4.png';
import cleaning from '../components/assets/images/mask_3.png';

const OfficeCleaning = () => {
  return (
    <>
    <div>
        <section className='office-section-1'>
            <h1>office cleaning</h1>
        </section>
        <section>
            <div className='row'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </section>
        <section>
        <Tabs
      defaultActiveKey="bathrooms"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="bathrooms" title="Bathrooms">
        <div>
            <ul>
                <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
            </ul>
        </div>
      </Tab>
      <Tab eventKey="kitchen" title="Kitchen">
      <div>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque.</li>
            </ul>
      </div>
      </Tab>
      <Tab eventKey="bedrooms-common-area" title="Bedrooms and Common Areas">
      <div>
            <ul>
                <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
            </ul>
      </div>
      </Tab>
      <Tab eventKey="extra-charge" title="We charge extra for the following">
      <div>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque.</li>
            </ul>
      </div>
      </Tab>
      </Tabs>
        </section>

        <section>
            <div className='row'>
                <div className='col-md-6'>
                    <div><img src={experience} alt="experience staff"></img></div>
                    <div>
                        <h4>Experienced Staff</h4>
                        <p>Maybe you have a custom-styled ordered list you want to show off, or maybe you just want a long chunk of Lorem Ipsum that’s already wrapped in paragraph tags</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div><img src={bonded} alt="bonded secured"></img></div>
                    <div>
                        <h4>Bonded & Insured</h4>
                        <p>Maybe you have a custom-styled ordered list you want to show off, or maybe you just want a long chunk of Lorem Ipsum that’s already wrapped in paragraph tags</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div><img src={service} alt="fast service"></img></div>
                    <div>
                        <h4>Fast Service</h4>
                        <p>Maybe you have a custom-styled ordered list you want to show off, or maybe you just want a long chunk of Lorem Ipsum that’s already wrapped in paragraph tags</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div><img src={cleaning} alt="cleaning supplies"></img></div>
                    <div>
                        <h4>Cleaning Supplies Provided</h4>
                        <p>Maybe you have a custom-styled ordered list you want to show off, or maybe you just want a long chunk of Lorem Ipsum that’s already wrapped in paragraph tags</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default OfficeCleaning
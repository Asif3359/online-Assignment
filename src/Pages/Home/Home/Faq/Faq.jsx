import React from 'react';

const Faq = () => {
    return (
        <div className='mt-5 lg:mt-10 flex justify-between items-start gap-10 '>
            <div className='flex-1 space-y-1'>
                <div className="collapse collapse-arrow  text-left">
                    <input type="radio" name="my-accordion-2" defaultChecked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow  text-left">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow  text-left">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
            <div className='flex-1 space-y-3'>
                <div className=' flex flex-col space-y-1'>
                    <label htmlFor="email" className='text-left'>Your Email</label>
                    <input type="email" name="email" id="email" placeholder='@email' className='w-full p-3 rounded-lg border-2' />
                </div>
                <div className='flex flex-col space-y-1'>
                    <label htmlFor="email" className='text-left'>Your Question</label>
                    <textarea  rows="5" placeholder='Enter Your Question ?'  className='w-full h-fit p-3 rounded-lg border-2'/>
                </div>
            </div>
        </div>
    );
};

export default Faq;
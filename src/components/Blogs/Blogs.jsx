import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='banner h-100 justify-content-start'>
                
                <h2 className='blog text-center py-5'>Blogs</h2>
            
               </div>  
            <div class="QnA row mb-3">
                <div class="col-sm-6">
                    <div class="card m-5 bg-light rounded">
                        <div class="card-body">
                            <h5 class="card-title">Question No-01:When should you use context API?</h5>
                            <p class="card-text"><strong>Answer:</strong> Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card m-5 bg-light">
                        <div class="card-body">
                            <h5 class="card-title">Question No-02: What is a custom hook?</h5>
                            <p class="card-text"><strong>Answer:</strong> A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card m-5 bg-light">
                        <div class="card-body">
                            <h5 class="card-title">Question No-03: What is useRef?</h5>
                            <p class="card-text"><strong>Answer:</strong> useRef is a built-in React hook that accepts one argument as the initial value and returns a reference. A reference is an object having a special property current .</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card m-5 bg-light">
                        <div class="card-body ">
                            <h5 class="card-title">Question No-04: What is useMemo?</h5>
                            <p class="card-text"><strong>Answer:</strong> React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';

const Testimomial = () => {
  return (
        <div id='testimonial'>
            <h2>Testimonial</h2>

            <section>
                <TestimomialCard 
                    name={"Priyanshu"} 
                    feedback={"My Work is Experience"}
                />

                <TestimomialCard 
                    name={"Priyanshu"} 
                    feedback={"My Work is Experience"}
                />
                
                <TestimomialCard 
                    name={"Priyanshu"} 
                    feedback={"My Work is Experience"}
                />
            </section>
        </div>
    );
};

const TestimomialCard = ({ name, feedback }) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
);

export default Testimomial;
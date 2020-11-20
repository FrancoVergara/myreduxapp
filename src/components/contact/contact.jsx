import React from 'react';

const Contact = () => {
    return (
        <section id="container" className="create-container">
            <h1>Contacto</h1>
            
            <form>
                <div>
                    <label htmlFor="name">Nombre completo</label>
                    <input
                        type="text"
                        name="name"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                    />
                </div>

                <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        name="message"
                    ></textarea>
                </div>

                <input 
                    type="submit"
                    value="Mandar mensaje"
                />
            </form>
        </section>
    );
}
 
export default Contact;
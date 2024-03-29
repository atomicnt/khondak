const Contact = {
    after_render: ()=>{},
    render: ()=>{
        return`
        <!--=========================contact section-->
        <section class="contacts section" id="contact">
            <div class="container">
                 <div class="row">
                    <div class="section-title padding">
                        <h2>Contacts Us</h2>
                    </div>
                </div>
                <h3 class="contact-title paddin">Have any Question?</h3>
                <h4 class="contact-sub-title padding-15">We are at your service</h4>
                <div class="row">
                    <!--contact info-->
                    <div class="contact-info-item padding">
                        <div class="icon">
                            <i class="fa fa-phone"></i>
                        </div>
                        <h4>Call Us On</h4>
                        <p>+254722139039</p>
                    </div>
                    <div class="contact-info-item padding">
                        <div class="icon">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <h4>Email</h4>
                        <p>atomicniternet@gmail.com</p>
                    </div>
                    <div class="contact-info-item padding">
                        <div class="icon">
                            <i class="fa fa-map-marker-alt"></i>
                        </div>
                        <h4>Office</h4>
                        <p>atomic internet</p>
                    </div>                        
                </div>
                <h3 class="contact-title padding">SEND US AN EMAIL</h3>
                <h4 class="contact-sub-title padding-15">INSTANT RESPOSE TO MESSAGE</h4>
                <!--contact form-->
                <div class="row">                    
                    <form class="contact-form padding">
                        <div class="row">
                            <div class="form-item col-6 padding">
                                <div class="form-group">
                                    <input type="text" class="form-control"id="name" placeholder="Name">
                                </div>
                            </div>
                            <div class="form-item col-6 padding">
                                <div class="form-group">
                                    <input type="email" class="form-control" id="email" placeholder="Email">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-item col-12 padding">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject">
                                </div>
                            </div>
                            <div class="form-item col-12 padding">
                                <div class="form-group">
                                    <textarea name="message" class="form-control" id="message" placeholder="Message"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-item col-12 padding">
                                <input type="submit" class="btn" value="Send Message">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        `;
    }
};

export default Contact;
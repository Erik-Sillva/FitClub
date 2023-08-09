import { FormEvent, useRef } from "react"
import { JoinContainer, LeftJ, RightJ, Form } from "./JoinStyled"
import emailjs from '@emailjs/browser'
import { emailjsConfig } from "../../ts/emailjs-config"

const Join = () => {
    const form = useRef<HTMLFormElement>(null)
    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
    
        emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, e.target as HTMLFormElement, emailjsConfig.userId)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error);
            });
        };

    return (
        <JoinContainer id="join-us">
            <LeftJ>
                <hr />
                <div>
                    <span className="stroke-text">pronto para</span>
                    <span>elevar</span>
                </div>

                <div>
                    <span>seu corpo</span>
                    <span className="stroke-text">com a gente?</span>
                </div>
            </LeftJ>

            <RightJ>
                <Form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_email" placeholder="Digite seu e-mail"/>
                    <button className="btn btn-j">Junte-se Agora</button>
                </Form>
            </RightJ>
        </JoinContainer>
    )
}

export default Join
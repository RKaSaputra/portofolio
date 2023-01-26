import Profile from "../assets/img/dika.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return(

            <div class="container mx-auto" style={{ marginLeft:`250px` }}>
                <div class="grid grid-rows grid-flow-col">
                    <div class="grid grid-cols-3 gap-8">
                        <div>
                            <h1 style={{ fontSize: `40px` }}>Kontak Saya</h1>
                        </div>
                        <div></div>
                        <div></div>
                        <div>
                            <img src={Profile} class="rounded-full inline" style={{ width:`300px` }} alt="Profile"/>
                        </div>
                        <div style={{ marginLeft:`60px` }}>
                            <h2 class="h2" style={{ fontSize: `25px` }}>Hallo, saya Teuku Dika Saputra</h2>
                            <br/>
                            <p class="gap-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium tempora aperiam numquam, rem soluta maxime.</p>
                            <br/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptatem recusandae modi ab. Nisi, cum non commodi iusto itaque eos quisquam repudiandae ipsam blanditiis placeat, libero, veniam fugit dignissimos? Veritatis.</p>
                            <br/>
                            <ul class="list-disc">
                                <li>SDN Babakan Surabaya</li>
                                <li>SMP PGRI 5</li>
                                <li>SMK MERDEKA RAYA</li>
                                <li>UNIKOM</li>
                            </ul>
                            <br/>
                            <a href="">
                                <FontAwesomeIcon style={{ marginRight:`20px` }} icon={faWhatsapp  } />
                            </a>
                            <FontAwesomeIcon icon={faInstagram  } />
                        </div>
                    </div>
                </div>
            </div>
            
    )
}

export default Contact
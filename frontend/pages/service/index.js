import { useSelector } from "react-redux";
import Image from 'next/image';
import styles from '../../styles/Service.module.sass';
import iconLanding from '../../assets/icons/lending.svg';
import iconInternetShop from '../../assets/icons/internet-shop.svg';
import iconWeb from '../../assets/icons/web-app.svg';
import right from '../../assets/icons/right.svg'
import Head from "next/head";


function Service() {
    const text = useSelector(state => state.language.text);
    function ListService(){
        const imgs = [
            iconLanding,
            iconInternetShop,
            iconWeb
        ]
        
        console.log(text.servicePage.listService)
        return text.servicePage.listService.map((value,index)=>{
            
            return(
                <>
                    
                        <div key={index} className={styles.block}>
                            <h1 className={styles.text} >
                                {value.text}
                            </h1>
                            <Image 
                                src={imgs[index]}
                                    width={400}
                                    height={300}
                            />
                            
                            <h3 className={styles.description}>
                                {value.description}
                            </h3>
                            <Image src={right} className={styles.button}/>
                        </div>
                   
                </>
                
                
            )
        })
    }
      function InputItems(props) {
        const data = props.data;

        return data.map((value, index) => {

            if(value.name === 'comment') {
                return(
                <div
                    className={styles.inputItems}
                    key={index}
                >
                    <textarea type={value.type} required name={value.name} placeholder={value.placeholder}/>
                    <span>{value.text}</span>
                </div>
                )
            }
            return(
                <div
                    className={styles.inputItems}
                    key={index}
                >
                    <input type={value.type} required name={value.name} placeholder={value.placeholder}/>
                    <span>{value.text}</span>
                </div>
            )
        });
    }
    function ThenWeDevelop(){
        return text.servicePage.ThenWeDevelop.subsequence.map((value,index)=>{
          return(
            <>
            <div key={index} >
                
                    
                <h2 className={styles.subsequence_caption}>
                    {value.caption}
                </h2>
                    
                    
                <h3 className={styles.subsequence_description}>
                    {value.description}
                </h3>
                    
                    
                    
                
            </div>
            </>
          )  
        })
    }
    function DevelopmentCost(){
        return text.servicePage.developmentCost.subsequence.map((value,index)=>{
            return(
                <>
                    
                        <div key={index} className={styles.DevelopmentCost_index}>
                            <p className={styles.DevelopmentCost_value}>
                                {value.name}
                            </p>
                            <p className={styles.DevelopmentCost_text}>
                                {value.price}
                            </p>
                            <p className={styles.DevelopmentCost_text}>
                                {value.term}
                            </p>

                        </div>
                    
                
                </>
            )
        })
    }
    function Technology_frontend(){
        return text.servicePage.technology.technology_frontend.map((value,index)=>{
            return(
                <>
                    
                        <div key={index} className={styles.technology_TheBeauty}>
                            <p> {value.name}</p>
                        </div>
                        

                    
                
                </>
            )
        })
    }
    function Technology_backend(){
        return text.servicePage.technology.technology_backend.map((value,index)=>{
            return(
                <>
                    
                        <div key={index} className={styles.technology_TheBeauty}>
                            <p> {value.name}</p>
                        </div>
                        

                    
                
                </>
            )
        })
    }
    return(
        <>
            <Head>
                <title>{text.head.title.service}</title>
            </Head>
            <div className={styles.service}>
                <div className={styles.banner}>
                    <h1>{text.servicePage.caption}</h1>
                </div>
                
                
                
                <div className={styles.services}>
                    
                    <div className={styles.ListService}>
                        <ListService/>
                    </div>
                    
                    <div className={styles.price}>
                        <h1 className={styles.start}>
                            {text.servicePage.price}
                        </h1>
                        <h3 className={styles.price_description}>
                            {text.servicePage.description}
                        </h3>
                        <div className={styles.button}>
                            <h3>
                                {text.servicePage.button}
                            </h3>
                        </div>
                    </div>
                    <div className={styles.help}>
                        <h1 className={styles.help_caption}>
                            {text.servicePage.help.caption}
                        </h1>
                        <div className={styles.elem}>
                            <animate/>
                            <anime/>
                        </div>
                        <InputItems data={text.servicePage.help.inputItems}/>
                        <div className={styles.button}>
                            {text.servicePage.help.button}
                        </div>
                        <p className={styles.agreement}>
                            {text.servicePage.consultation.agreement_one}
                            {text.servicePage.consultation.agreement_two}
                        </p>
                        

                        
                    </div>
                </div>

                {/* Разработка */}
                <div className={styles.HowWeDevelop}>
                    <h1  className={styles.HowWeDevelop_caption}>
                        {text.servicePage.HowWeDevelop.caption}
                    </h1>
                    <div className={styles.ExploreFirst}>
                        <div className={styles.ExploreFirst_text}>
                            <h2>{text.servicePage.HowWeDevelop.ExploreFirst}</h2>
                            <h3>{text.servicePage.HowWeDevelop.ExploreFirst_description}</h3>
                        </div>
                        <div className={styles.ExploreFirst_img}>
                            dsa
                        </div>
                    </div>
                </div>
                {/* Затем разрабатываем */}
                <div className={styles.ThenWeDevelop}>
                    <h1 className={styles.ThenWeDevelop_caption}>
                        {text.servicePage.ThenWeDevelop.caption}
                    </h1>
                    <div className={styles.ThenWeDevelop_anime}></div>
                    <div className={styles.ThenWeDevelop_subsequence}>
                        <ThenWeDevelop/>
                    </div>
                </div>
                {/* стоимость разработки */}
                <div className={styles.developmentCost}>
                    <div className={styles.developmentCost_block_one}>
                        <h1 className={styles.developmentCost_text}>
                            {text.servicePage.developmentCost.developmentCost_caption}
                        </h1>
                        <h2 className={styles.developmentCost_text}>
                            {text.servicePage.developmentCost.developmentCost_text_one}
                        </h2>
                        <h3 className={styles.developmentCost_text}>
                            {text.servicePage.developmentCost.developmentCost_text_two}
                        </h3>
                    </div>
                    <div className={styles.developmentCost_block_two}>
                        <div className={styles.block_two_caption}>
                            <p className={styles.block_two_caption_text}>
                                {text.servicePage.developmentCost.name}
                            </p>
                            <p className={styles.block_two_caption_text}>
                                {text.servicePage.developmentCost.price}
                            </p>
                            <p className={styles.block_two_caption_text}>
                                {text.servicePage.developmentCost.term}
                            </p>
                        </div>
                        <div>
                            <div className={styles.block_two_subsubsequence}>
                                <DevelopmentCost/>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.developmentCost_button}>
                        <Image
                            src={right}
                            width={50}
                            height={50}
                        />
                        <div    className={styles.developmentCost_button_text}>
                            <h3 >
                                {text.servicePage.developmentCost.developmentCost_button_text_one}
                                
                            </h3>
                            <h3>
                                {text.servicePage.developmentCost.developmentCost_button_text_two}
                            </h3>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.technology}>
                    <p className={styles.technology_caption}>
                        {text.servicePage.technology.technology_caption}
                    </p>
                    <div className={styles.technology_list}>
                        <p className={styles.technology_frontend_caption}>
                            {text.servicePage.technology.technology_frontend_caption}
                        </p>
                        <div className={styles.technology_frontend}>
                            
                            < Technology_frontend/>
                        </div>
                        <p className={styles.technology_frontend_caption}>
                            {text.servicePage.technology.technology_backend_caption}
                        </p>
                        <div className={styles.technology_backend}>
                            
                            <Technology_backend/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}


export default Service;
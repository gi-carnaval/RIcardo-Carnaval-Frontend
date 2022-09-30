import CardJob from "../CardJob";
import CardSimple from "../CardSimple";
import styles from "./CardGrid.module.scss"

export default function CardGrid({cardType, content}){

    if(cardType == "Portfolios"){

        return(
            <div className={styles.cardGrid}>
            {content.map((content, index) => {
                return(
                    <>

                    <CardSimple key={index} content={content}/> 
                    </>
                );
                
            })}
            </div>
        )
    } else {
        return(
            <div className={styles.cardGrid}>
                {content.map((event, index) => {
                    if(event.attributes.featureImage.data.length > 0){
                        return(                  
                        <CardJob key={index}  content={event}/>  
                        );
                    }
                })}
            </div>
        )
    }
}
import Image from 'next/image'

export default function Gallery(images){
    return(
        <>
            <div className="gallery">
                {images.map((image, index) => {
                    return(
                        <div className="pics" key={index}>
                            {/* <Image
                                src={}
                                width={}
                                height={}
                            /> */}
                            <h3>Foto</h3>
                        </div>
                    );
                })}
                
            </div>
        </>
    )
}
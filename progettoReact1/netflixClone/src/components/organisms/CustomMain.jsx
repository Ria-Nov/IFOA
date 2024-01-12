import CustomGallery from '../molecules/CustomGallery'
import CustomGenre from '../molecules/CustomGenre'


const CustomMain = () => {
    return (
        <>
        <CustomGenre />
        <div>
        <h3 className="text-white mx-4">Lord of the Rings</h3>
        <div className="text-center">
        <CustomGallery url="http://www.omdbapi.com/?apikey=bf16e943&s=lord%20of%20the%20rings"/>
        </div>
        </div>
        <div>
        <h3 className="text-white mx-4">Doctor Who</h3>
        <div className="text-center">
        <CustomGallery url="http://www.omdbapi.com/?apikey=bf16e943&s=doctor%20who"/>
        </div>
        </div>
        <div>
        <h3 className="text-white mx-4">Star Trek</h3>
        <div className="text-center">
        <CustomGallery url="http://www.omdbapi.com/?apikey=bf16e943&s=star%20trek"/>
        </div>
        </div>
        </>
    )
}

export default CustomMain;
import React from 'react'
import "./Feed.css" 
const Feed = () => {
  const videos = [
  {
    id: 1,
    title: " provides social media services",
    channel: "Indolike",
    views: "1.5M views",
    time: "2 weeks ago",
    thumbnail: "https://www.f6s.com/content-resource/media/5231130_67d9ed78929aad5ab07686fbbdc6a2c28598888a_large.png",
    channelImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAQlBMVEVHcExc4eZc4eZc4eZc4eZc4eZc4eZc4eZc4eZc4eZd5epEqKw0goQUMzMAAAAdSElf6e8JGhpX1tonYGJQxco/mp6GfTX3AAAACnRSTlMATZTM6/8Vpo8gd6q9MgAAARlJREFUeAF0koUOxDAMQwfNIG3djP7/V++i8sGTJopXOzA0jNNsiMw8jcMPlpUa1uWzvtEHW/+7oS9M88hOP9nL/1RhZirkN0xTts5WhfnO5wEEbpL2BuygWO5Mmv7lgD+BS+o83gJqAJxcCFVA7/mm1/U7vwXjMMX6rQpWge8E0zCTVoJm1wxBugw0pyEA0JAXcAMPUzOK3J9jIn4A1TBVoiAOUFMqTA3RQgIOiVn6CGRiSHGaIXpAHZhLyClaAI9ot9FBrEuKKQ2KD+AWOb1asFjAcxpUTqmVCwp8qBsryxJ1V5E+onWJy6rrlvsCghUm5707U4SlORgWImGVinB/2ob+YL6Ptmd5jWCyJ5xxCGc9wpmXYPYHADxEGL9S+eQTAAAAAElFTkSuQmCC"
  },
  {
    id: 2,
    title: " provides social media services",
    channel: "Gopal Gaming",
    views: "1.1M views",
    time: "1 Hours ago",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhLFtrJpUuZKxpWBsUn5H7GxuI2YYlt6loQ&s",
    channelImg: "https://static.vecteezy.com/system/resources/previews/006/988/698/non_2x/man-headphones-mascot-logo-gaming-illustration-vector.jpg"
  },
   {
    id: 3,
    title: "Pehalgaam Attack ",
    channel: "TV9 News ",
    views: "500k",
    time: "30 Minutes ago",
    thumbnail: "https://i.ytimg.com/vi/hfwPLazLbd4/hq720.jpg?v=67ed5921&sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCAEbODJpamEWEquuoHSutt-Vt7Qw",
    channelImg: "https://yt3.googleusercontent.com/HB8cDZ8136P8A3e-YlAYHN8hsSIqfFweGFkXT_ZUi_3iRozZiLoUwCjTYHzFx10KSD1x7MMcKw=s900-c-k-c0x00ffffff-no-rj"
  },
   {
    id: 4,
    title: " Learn English With Prodcast",
    channel: "Learn with Listening",
    views: "1.1M views",
    time: "1 Hours ago",
    thumbnail: "https://www.shutterstock.com/shutterstock/photos/1043962963/display_1500/stock-vector-design-concept-of-word-english-website-banner-1043962963.jpg",
    channelImg: "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2011/03/thumb_720_450_EG-8-Static-Image-Sound-Louder.jpg",
   },
   {
    id: 5,
    title: "DevOps :what you need to know",
    channel: "Software Fundamentals",
    views: "102 views",
    time: "1 Hours ago",
    thumbnail: "https://imageio.forbes.com/specials-images/imageserve/60f1e792c7e89f933811814c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    channelImg: "https://i.pinimg.com/236x/da/04/db/da04dbce635a8c97e3cc0129db9b39ac.jpg",
  },
   {
    id: 6,
    title: "Ethical Hacking",
    channel: "WS CubeTech",
    views: "2M views",
    time: "1 day ago",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0qa-rcFDEuXoVsoG0A-iFjPeHjLDIOx52g&s",
    channelImg: "https://media.licdn.com/dms/image/v2/C4E0BAQFp_dxtXxsVpQ/company-logo_200_200/company-logo_200_200/0/1630574168789/wscube_tech_office_logo?e=2147483647&v=beta&t=PCe2iEr46_KJaB7q-mv4VIqf8IhMe3C7ZtqBjzefw7k"
  },
  
    {
    id: 7,
    title: "Arjit Singh PlayList ",
    channel: "9xm",
    views: "1M views",
    time: "1 Hours ago",
    thumbnail: "https://www.saregama.com/blog/wp-content/uploads/2020/04/Arjit.jpg",
    channelImg: "https://jiotvimages.cdn.jio.com/dare_images/images/9XM.png"
  },
   {
    id: 8,
    title: " Middle Class Love",
    channel: "ZCinemas",
    views: "1M views",
    time: "3 days ago",
    thumbnail: "https://i.ytimg.com/vi/yuIpbZZuEco/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCB6wznvSwo_z1UpFMQtCcuDYLZaA",
    channelImg: "data:image/jpeg;base64,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0UWuyKalfI9scbS+R5s1o3k/Z28EnsKUtktFauyaqaAbRwhmTpX9KR3N3IfJHD08VrWtxS9VpNNGCm3j4t0otoQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEGDpnRMNVE6CdgfG7zEHg5p4Ec1mJ25I2rFo2lw/W/UaooS54BnpeErRm0cpAO98rcercr63iXOy4bU9FXaFNryka1EJslYxFc2TsYim1mTGxFFrMljEUWs2GitFy1D9nAwvdxO5jRzc7gPp5XSZiOaeHT5M9tqQ6rqtqxHRtLr7Sdws6S24eCwcG/SePC2ve/E9NpNFTTx5z5t+oN0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQfCL5FBS9P9zWkqCXxXpJDxjAMRPXGch+zZWVyTDWyaWlu2OyVI0h3M66InZiKpbwwPDH+dr7fQSrIyVlpX0eSOXa08urdZGbPpakdkT3j0tBClxR5tS+HLHOsvcGhKomwpqo/+PKPsTihTODLP3Z+Tc0OpVdJ/wAHZDnI9jB6ASfoWJyVhKvR+e/ht6rZonucsFnVUpk+RHdjOwu3nzWVdsvk3cPRNI7ck7rpRUUcLRHExsbBwaAB29Z61XM7urTHWkbVjaGQsJiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/9k="
  },
   {
    id: 9,
    title: " The Perfect Burger ",
    channel: "Mumas Kitchan",
    views: "506 Views",
    time: "1 Hours ago",
    thumbnail: "https://img.freepik.com/free-vector/drawn-recipes-youtube-thumbnail_23-2148926453.jpg?semt=ais_hybrid&w=740",
    channelImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMI7k59GGI3XM8oAPiEfacyntnmaOGRtDAQ&s"
  },

  // add more objects as needed
];

  return (
   
       <div className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 !ml-4 lg:grid-cols-3 gap-3 ">
      {videos.map((video) => (
        <div key={video.id} className="rounded-lg shadow-md flex flex-col cursor-pointer">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full rounded-lg"
          />
          <div className="flex  gap-2">
            <img
              src={video.channelImg}
              alt={video.channel}
              className="w-10 h-11 rounded-full !pl-1 !pt-2"
            />
            <div className='!pt-2'>
              <h3 className="font-semibold text-sm">{video.title}</h3>
              <p className="text-gray-600 text-xs">{video.channel}</p>
              <p className="text-gray-500 text-xs">
                {video.views} • {video.time}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
      
    
  )
}

export default Feed

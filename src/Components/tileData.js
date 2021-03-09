const tileData = [
    {
    img: 'https://images.unsplash.com/photo-1467970767472-2488be1b8362?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1233&q=80',
    title: 'Red Plant',
    },
    {
    img: 'https://images.unsplash.com/photo-1589571838803-01e4ebe8ff7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1233&q=80',
    title: 'Girl Field',
    featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80',
      title: 'Guy Red plants',
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1510266009730-c72c57421300?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
      title: 'lots of plants window',
    },
    
    {
      img: 'https://images.unsplash.com/photo-1445532529572-b970dbde1bcf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2694&q=80',
      title: 'Coffee plants',
    },
    {
      img: 'https://images.unsplash.com/photo-1499624412197-fdc740373527?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
      title: 'plate candle plant',
    },
    {
      img: 'https://images.unsplash.com/photo-1501946623428-b301146b83af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2901&q=80',
      title: 'Bike Plant',
    },
    {
      img: 'https://images.unsplash.com/photo-1518450757707-d21c8c53c8df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
      title: 'Older People',
    },
    {
      img: 'https://images.unsplash.com/photo-1519529703889-e4cf41c0ae70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2700&q=80',
      title: 'Cactus',
    },
    {
      img: 'https://images.unsplash.com/photo-1483705385549-e04ea91e0011?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
      title: 'Groot',
    },
    {
      img: 'https://images.unsplash.com/photo-1547270785-e11cb938d594?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
      title: 'Cat',
    },
    {
      img: 'https://images.unsplash.com/photo-1517308120943-8fce52266840?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
      title: 'Plants chair',
    },
    {
        img: 'https://images.unsplash.com/photo-1553618715-1c1dd17f5382?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
        title: 'blurred plants',
      },
      {
        img: 'https://images.unsplash.com/photo-1536523801166-20c7f1a713e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2702&q=80',
        title: 'Guy sitting',
      },
      {
        img: 'https://images.unsplash.com/photo-1530307498023-e8fa285c07b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
        title: 'Plant + chair',
      },
      {
        img: 'https://images.unsplash.com/photo-1585962485475-e411a40a1a6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
        title: 'woman + tree',
      },
      {
        img: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1249&q=80',
        title: 'succulents',
      },
      {
        img: 'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80',
        title: 'holding three plants',
      },
      {
        img: 'https://images.unsplash.com/photo-1524247108137-732e0f642303?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80',
        title: 'people gardening',
      },
      {
        img: 'https://images.unsplash.com/photo-1528467279403-46af96c37ab3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
        title: 'woman watering',
      },

  ];
  
  export default tileData;
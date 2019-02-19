function getBingPageType(lowesPageType){
    switch(lowesPageType){
        case 'hp': 
            return 'home';
        case 'super-category':
        case 'category':
        case 'sub-category':
            return 'category';
        case 'product-display':
        case 'landing_page':
        case 'brand-page':
        case 'product-list':
            return 'product';
        case 'search-results':
            return 'searchresults';
        case 'shopping-cart':
            return 'cart';
        case 'order-confirmation':
            return 'purchase';
        default:
            return 'other';
    }
}

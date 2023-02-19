import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
                <div class=" col-10 position-relative">
                    <input class=" ps-5 form-control rounded-pill bg-white" placeholder="Search Tuiter"/>
                    <i class="fas fa-search  position-absolute wd-search-logo"></i>
                </div>
                <div class="col-2">
                    <i class="fas fa-cog position-absolute wd-search-gear "></i>
                </div>
            </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
           </ul>
           <ul class="nav nav-pills mt-2 mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#Foryou">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Trending">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#News">News</a>
                </li>
                <li class="nav-item hidden-xs">
                    <a class="nav-link " href="#Sports" >Sports</a>
                </li>
                <li class="nav-item hidden-xs hidden-sm">
                    <a class="nav-link " href="#Entertainment" >Entertainment</a>
                </li>
            </ul>
           <!-- image with overlaid text -->
           <div class="position-relative border-secondary">
                <img src="picts/Starship.jpg" width="100%" style="overflow:hidden;" />
                <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
           </div>
           
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

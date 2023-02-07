import Aside from "./components/aside";
import Error404 from "./components/errors/error404";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Project from "./pages/project";
import Service from "./pages/service";
import Staff from "./pages/staff";
import { parseRequestUrl } from "./utils";


const routes = {
    '/': Home,
    //'/home': Home,
    //'/about': About,
    //'/contact': Contact,
    //'/project': Project,
    //'/service': Service,
    //'/staff': Staff
};

const router = async()=>{
    const request =  parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}`: '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');
    const page = request[parseUrl] ? routes[parseUrl] : Error404;

    const aside = document.getElementById('aside-content');
    aside.innerHTML = await Aside.render();
    await Aside.after_render();
    const main = document.getElementById('atomic-content');
    main.innerHTML = await page.render();
    await page.after_render();
 
}
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
/* Desenvolva seu script aqui */

import { btnAll } from "../../scripts/observer.js";
import { Dom } from "../../scripts/render.js";
import { Request } from "../../scripts/request.js";


Dom.renderBtnContainer(Request.cards())
btnAll()

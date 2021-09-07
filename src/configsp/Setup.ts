import { SPFetchClient } from "@pnp/nodejs";
import { sp } from "@pnp/sp/presets/all";

export const configsp = () => {
    sp.setup({
        sp: {
            fetchClientFactory: () => {
                return new SPFetchClient(
                "https://devfvg.sharepoint.com/sites/EstebanZapata", 
                "086426c8-3c85-44ea-84bf-57f25fcd5e78", 
                "Rn0e32tbf+aOX4/WSPSkwFt0jqEWMm4Iyecn9fnUNFg=")
            },
        },
    });
}
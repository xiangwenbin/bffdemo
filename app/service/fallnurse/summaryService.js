import rp from 'request-promise';
import _ from 'lodash';
import Util from '../../util/util';


/**
 * 病人服务
 */
class SummaryService {
    constructor(ctx){
        this.ctx=ctx;
    }

    //查询跌倒概览(多病人)
    // @return  {
    //     accessFlag(string, optional): 是否已进行评估,1有发生, 2无发生 ,
    //     accessLevel(string, optional): 评估等级,0-无危险，1-轻度，2-重度,
    //     accessName(string, optional): 评估等级名称 ,
    //     patientId(string, optional): 病人 ,
    //     reportFlag(string, optional): 跌倒报告,1有发生, 2无发生
    // }
    getSummaryFallPatientById(ids) {
        let result = [];
        let baseUrl = Util.getBaseUrlByServiceName("fallnurse-service");
        let options = Util.getdefaultOptions(this.ctx);
        console.log(options);
        _.assign(options, {
            uri: `${baseUrl}/pi/patientid`,
            qs:{
                patientId:ids.join(",")
            }
        })
        return rp(options);
    }
}

export default SummaryService
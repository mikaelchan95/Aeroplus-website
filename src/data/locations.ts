import type { Location } from '../types/locations';

export const locations: Location[] = [
  {
    country: 'Hong Kong',
    offices: [
      {
        name: 'Aero Plus International Holdings Limited',
        address: '23/F, Billion Plaza Two, 10 Cheung Yue Street, Cheung Sha Wan, Kowloon, Hong Kong',
        tel: '(852) 3619-4080',
        email: 'info@aeroplusgroup.com',
        isHeadquarter: true
      },
      {
        name: 'Aero Plus Corporate Management Limited',
        address: '23/F, Billion Plaza Two, 10 Cheung Yue Street, Cheung Sha Wan, Kowloon, Hong Kong'
      }
    ]
  },
  {
    country: 'China',
    offices: [
      {
        name: 'Shandong Aero Plus Aviation Service Company Limited',
        address: 'Units 2009-2010, 20/F, Tower A, Chengcheng Building, No.10567 East Jingshi Road, Innovation Zone, Jinan, Shandong',
        tel: '(531) 8176-7433',
        email: 'sdapinfo@aeroplusgroup.com'
      },
      {
        name: 'Aero Plus International (Jinan) Corporate Limited',
        address: 'Room 609-6, Building 3, Zone 4, HanYu Financial Business Center, 7000 Jingshi Road, Jinan, Shandong'
      },
      {
        name: 'Jinan Ying Jia Business Service Company Limited',
        address: 'Room 411-1-35, 7617 Airport Road, Yaoqiang District, High-tech Zone, Jinan, Shandong'
      },
      {
        name: 'Ningbo Aero Plus Aviation Technology Development Company Limited',
        address: 'Room 503, No. 1078, Zhongchan East Road, Fenghua District, Ningbo City, Zhejiang Province'
      },
      {
        name: 'Shanghai Lu Ceng Enterprise Management Company Limited',
        address: 'Unit 905, T9, Baolong Building, Qibao, Minhang District, Shanghai'
      },
      {
        name: 'Shanghai Danchao Information Technology Company Limited',
        address: 'Room G08, 14th Floor, Zhaofeng International Plaza, 999 Changning Road, Changning District, Shanghai'
      }
    ]
  },
  {
    country: 'Singapore',
    offices: [
      {
        name: 'Aero Plus (Singapore) Pte Limited',
        address: 'Gemini@Sims, 2 Sims Close, #03-06, Singapore 387298'
      },
      {
        name: 'IP Egg Singapore Pte Limited',
        address: 'Gemini@Sims, 2 Sims Close, #03-06, Singapore 387298'
      }
    ]
  }
];
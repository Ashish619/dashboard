import React from 'react'
import {Row, Col, Card} from 'antd'
import {Gradient} from 'uigradients';
import { generator } from 'uigradients';


generator({gradient: 'intuitive_purple'});

const styles = {
    gradient_box: {
        height: 150,
        padding: 20,
        marginBottom:15
      
    },
    title:{
        color:'#fff',
        fontSize:14
    }
}

const gradient_list = ['a_lost_memory', 'ali', 'alihossein','almost','amethyst','aqua_marine','aqualicious','army','ash','aubergine','autumn','azure_pop','back_to_earth','back_to_the_future','behongo','between_night_and_day','between_the_clouds','black_rose','blood_red','bloody_mary','blurry_beach','blush','bora_bora','bourbon','brady_brady_fun_fun','bright_vault','calm_darya','candy','cheer_up_emo_kid','cherry','cherryblossoms','christmas','clear_sky','clouds','colors_of_sky','cool_brown','cosmic_fusion','crazy_orange_i','curiosity_blue','dance_to_forget','dania','dark_knight','dark_skies','dawn','day_tripper','decent','deep_purple','deep_sea_space','deep_space','dirty_fog','disco','dracula','dusk','dusk_alt','earthly','eds_sunset_gradient','eighties_purple','electric_violet','emerald_water','endless_river','facebook_messenger','fifty_shades_of_grey','firewatch','flickr','forest','forever_lost','fresh_turboscent','friday','frost','frozen','grapefruit_sunset','green_and_blue','green_beach','green_to_dark','haikus','harmonic_energy','hersheys','horizon','ibiza_sunset','iiit_delhi','inbox','influenza','instagram','intuitive_purple','jonquil','joomla','juicy_orange','kashmir','koko_caramel','kyoto','lemon_twist','light_orange','limeade','little_leaf','lizard','love_couple','lush','man_of_steel','mango_pulp','mantle','martini','master_card','mauve','metallic_toad','miaka','miami_dolphins','midnight_city','mild','minimal_red','minnesota_vikings','mirage','misty_meadow','mojito','moonrise','moor','moss','mystic','namn','neon_life','nepal','netflix','nighthawk','noon_to_dusk','opa','pale_wood','parklife','passion','pastel_orange_at_the_sun','peach','petrichor','piglet','pinky','pinot_noir','pizelex','playing_with_reds','politics','poncho','portrait','predawn','purple_bliss','purple_paradise','purple_white','purplin','red_mist','red_ocean','reef','rose_water','royal','sage_persuasion','sea_blizz','sea_weed','servquick','shadow_night','shahabi','sherbert','shore','shrimpy','shroom_haze','sirius_tamed','snapchat','solid_vault','soundcloud','starfall','steel_gray','stellar','sun_on_the_horizon','sunny_days','sunrise','sunset','superman','suzy','sweet_morning','sylvia','talking_to_mice_elf','teal_love','the_strain','timber','titanium','tranquil','transfile','turquoise_flow','twitch','ukraine','vasily','venice_blue','vine','virgin','virgin_america','winter','youtube']
const blankPage = () => <div className='content-inner'>
<Gradient gradient="intuitive_purple" style={styles.gradient_box}>
                <h1 style={styles.title}>intuitive_purple</h1>
            </Gradient>
    <Row gutter={16}>

        {gradient_list.map(item => <Col key={item} xs={24} md={4} lg={4}>
            <Gradient gradient={item} style={styles.gradient_box}>
                <h1 style={styles.title}>{item}</h1>
            </Gradient>

        </Col>)}

    </Row>

</div>

export default blankPage

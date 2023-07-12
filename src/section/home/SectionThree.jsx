import { Container, Grid } from "@mui/material";
import AwsLogoColor from '../../assets/image/Section_3/aws_color.png'
import AngularLogoColor from '../../assets/image/Section_3/angular_color.png'
import CloudLogoColor from '../../assets/image/Section_3/cloud_color.png'
import CssLogoColor from '../../assets/image/Section_3/css_color.png'
import HtmlLogoColor from '../../assets/image/Section_3/html_color.png'
import JsLogoColor from '../../assets/image/Section_3/js_color.png'
import MicroSqlLogoColor from '../../assets/image/Section_3/microsoftsql_color.png'
import MongoDbLogoColor from '../../assets/image/Section_3/mongodb_color.png'
import MysqlLogoColor from '../../assets/image/Section_3/mysql_color.png'
import PhpLogoColor from '../../assets/image/Section_3/php_color.png'
import PhytonLogoColor from '../../assets/image/Section_3/phyton_color.png'
import PostgreLogoColor from '../../assets/image/Section_3/postgresql_color.png'
import ReactLogoColor from '../../assets/image/Section_3/react_color.png'
import RubyLogoColor from '../../assets/image/Section_3/ruby_color.png'

const SectionThree = () => {
    const listImg = [AwsLogoColor, CloudLogoColor, AngularLogoColor, 
        CssLogoColor, HtmlLogoColor, JsLogoColor, PhpLogoColor, 
        PhytonLogoColor, ReactLogoColor, RubyLogoColor, MongoDbLogoColor, 
        MysqlLogoColor, PostgreLogoColor, MicroSqlLogoColor]

    return (
        <>
            <Container>
                <Grid container rowSpacing={8}>
                    {listImg.map((img) => (
                        <Grid key={img} className="box-logo" sx={{ display: "flex", justifyContent: "center" }} item md={2} xs={3}>
                            <img className="logo-color" src={img} alt="" />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default SectionThree;
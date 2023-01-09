from app.models import db, ProductImage, environment, SCHEMA


def seed_product_images():

    # Seasonal Decor:
    # p1:
    I1 = ProductImage (
        product_id = 1,
        url = 'https://i.etsystatic.com/37514832/r/il/e749ff/4308462898/il_794xN.4308462898_3c5w.jpg',
        preview_image = True
    )
    I2 = ProductImage (
        product_id = 1,
        url = 'https://i.etsystatic.com/37514832/r/il/ed2088/4308429838/il_794xN.4308429838_p773.jpg',
        preview_image = False
    )
    I3 = ProductImage (
        product_id = 1,
        url = 'https://i.etsystatic.com/37514832/r/il/89b3d4/4308429850/il_794xN.4308429850_mf7g.jpg',
        preview_image = False
    )
    I4= ProductImage (
        product_id = 1,
        url = 'https://i.etsystatic.com/37514832/r/il/50df75/4355826073/il_794xN.4355826073_aaw4.jpg',
        preview_image = False
    )

    # p2:
    I5 = ProductImage (
        product_id = 2,
        url = 'https://i.etsystatic.com/24087699/r/il/161e04/4443707305/il_794xN.4443707305_7iql.jpg',
        preview_image = True
    )
    I6 = ProductImage (
        product_id = 2,
        url = 'https://i.etsystatic.com/24087699/r/il/051739/4443707379/il_794xN.4443707379_4t1f.jpg',
        preview_image = False
    )
    I7 = ProductImage (
        product_id = 2,
        url = 'https://i.etsystatic.com/24087699/r/il/3b7e6e/4396315042/il_794xN.4396315042_3w19.jpg',
        preview_image = False
    )
    I8 = ProductImage (
        product_id = 2,
        url = 'https://i.etsystatic.com/24087699/r/il/a4883b/4443707603/il_794xN.4443707603_fnd1.jpg',
        preview_image = False
    )

    # p3:
    I9 = ProductImage (
        product_id = 3,
        url = 'https://i.etsystatic.com/6634797/r/il/4a1c5d/685930451/il_794xN.685930451_qvnz.jpg',
        preview_image = True
    )

    I10 = ProductImage (
        product_id = 3,
        url = 'https://i.etsystatic.com/6634797/r/il/585d31/2165832393/il_794xN.2165832393_452q.jpg',
        preview_image = False
    )

    I11 = ProductImage (
        product_id = 3,
        url = 'https://i.etsystatic.com/6634797/r/il/c7d6c0/2589951841/il_794xN.2589951841_5uao.jpg',
        preview_image = False
    )

    I12 = ProductImage (
        product_id = 3,
        url = 'https://i.etsystatic.com/6634797/r/il/3f91cd/1120000100/il_794xN.1120000100_d8wr.jpg',
        preview_image = False
    )

    # p4:
    I13 = ProductImage (
        product_id = 4,
        url = 'https://i.etsystatic.com/24964111/r/il/e3e7ab/3536898759/il_794xN.3536898759_cu6b.jpg',
        preview_image = True
    )
    I14 = ProductImage (
        product_id = 4,
        url = 'https://i.etsystatic.com/24964111/r/il/f09298/3536898765/il_794xN.3536898765_ffv5.jpg',
        preview_image = False
    )
    I15 = ProductImage (
        product_id = 4,
        url = 'https://i.etsystatic.com/24964111/r/il/85bd6b/3489256014/il_794xN.3489256014_6ako.jpg',
        preview_image = False
    )
    I16 = ProductImage (
        product_id = 4,
        url = 'https://i.etsystatic.com/24964111/r/il/7f4403/4368910375/il_794xN.4368910375_msif.jpg',
        preview_image = False
    )

    # p5:
    I17 = ProductImage (
        product_id = 5,
        url = 'https://i.etsystatic.com/20049947/r/il/658f7d/4321993539/il_794xN.4321993539_u57c.jpg',
        preview_image = True
    )
    I18 = ProductImage (
        product_id = 5,
        url = 'https://i.etsystatic.com/20049947/r/il/aeddfe/4274593014/il_794xN.4274593014_59pk.jpg',
        preview_image = False
    )
    I19 = ProductImage (
        product_id = 5,
        url = 'https://i.etsystatic.com/20049947/r/il/8b59d3/4274593010/il_794xN.4274593010_6fps.jpg',
        preview_image = False
    )
    I20 = ProductImage (
        product_id = 5,
        url = 'https://i.etsystatic.com/20049947/r/il/60292c/4321993553/il_794xN.4321993553_ni4n.jpg',
        preview_image = False
    )

    # p6:
    I21 = ProductImage (
        product_id = 6,
        url = 'https://i.etsystatic.com/24218949/r/il/ae959c/3484977548/il_794xN.3484977548_lkgs.jpg',
        preview_image = True
    )

    I22 = ProductImage (
        product_id = 6,
        url = 'https://i.etsystatic.com/24218949/r/il/05d65f/3484977650/il_794xN.3484977650_ohuw.jpg',
        preview_image = False
    )

    I23 = ProductImage (
        product_id = 6,
        url = 'https://i.etsystatic.com/24218949/r/il/281294/3543911187/il_794xN.3543911187_899b.jpg',
        preview_image = False
    )

    # p7:
    I24 = ProductImage (
        product_id = 7,
        url = 'https://i.etsystatic.com/23702777/r/il/14c918/4184624086/il_794xN.4184624086_s698.jpg',
        preview_image = True
    )

    I25 = ProductImage (
        product_id = 7,
        url = 'https://i.etsystatic.com/23702777/r/il/2fa402/4232282423/il_794xN.4232282423_sffe.jpg',
        preview_image = False
    )

    I26 = ProductImage (
        product_id = 7,
        url = 'https://i.etsystatic.com/23702777/r/il/6ae3d6/4232282411/il_794xN.4232282411_s250.jpg',
        preview_image = False
    )

    I27 = ProductImage (
        product_id = 7,
        url = 'https://i.etsystatic.com/23702777/r/il/b93c56/4184622950/il_794xN.4184622950_mbjb.jpg',
        preview_image = False
    )

    # p8:
    I28 = ProductImage (
        product_id = 8,
        url = 'https://i.etsystatic.com/18418190/r/il/2d9267/4298822751/il_794xN.4298822751_7jid.jpg',
        preview_image = True
    )

    I29 = ProductImage (
        product_id = 8,
        url = 'https://i.etsystatic.com/18418190/r/il/21aea3/4298815469/il_794xN.4298815469_4oeh.jpg',
        preview_image = False
    )

    I30 = ProductImage (
        product_id = 8,
        url = 'https://i.etsystatic.com/18418190/r/il/89ba72/4251178498/il_794xN.4251178498_nqao.jpg',
        preview_image = False
    )

    I31 = ProductImage (
        product_id = 8,
        url = 'https://i.etsystatic.com/18418190/r/il/ab3892/3857023192/il_794xN.3857023192_457i.jpg',
        preview_image = False
    )

    # p9:
    I32 = ProductImage (
        product_id = 9,
        url = 'https://i.etsystatic.com/13462671/r/il/8fa0c7/3777920932/il_794xN.3777920932_cbhy.jpg',
        preview_image = True
    )

    I33 = ProductImage (
        product_id = 9,
        url = 'https://i.etsystatic.com/13462671/r/il/c133c2/3825517649/il_794xN.3825517649_5msm.jpg',
        preview_image = False
    )

    I34 = ProductImage (
        product_id = 9,
        url = 'https://i.etsystatic.com/13462671/r/il/37c933/1331648584/il_794xN.1331648584_86sw.jpg',
        preview_image = False
    )

    # p10:
    I35 = ProductImage (
        product_id = 10,
        url = 'https://i.etsystatic.com/34451314/r/il/1d7289/4164790667/il_794xN.4164790667_omab.jpg',
        preview_image = True
    )

    I36 = ProductImage (
        product_id = 10,
        url = 'https://i.etsystatic.com/34451314/r/il/860b5b/4117123364/il_794xN.4117123364_dhj5.jpg',
        preview_image = False
    )

    I37 = ProductImage (
        product_id = 10,
        url = 'https://i.etsystatic.com/34451314/r/il/7612c6/4117123434/il_794xN.4117123434_8sy7.jpg',
        preview_image = False
    )

    I38 = ProductImage (
        product_id = 10,
        url = 'https://i.etsystatic.com/34451314/r/il/56d665/4117123404/il_794xN.4117123404_zqnl.jpg',
        preview_image = False
    )

    # p11:
    I39 = ProductImage (
        product_id = 11,
        url = 'https://i.etsystatic.com/34382609/r/il/ae6fbb/4350951163/il_794xN.4350951163_3m07.jpg',
        preview_image = True
    )

    I40 = ProductImage (
        product_id = 11,
        url = 'https://i.etsystatic.com/34382609/r/il/5ed784/3863151832/il_794xN.3863151832_c8yz.jpg',
        preview_image = False
    )

    I41 = ProductImage (
        product_id = 11,
        url = 'https://i.etsystatic.com/34382609/r/il/adedf5/4350946747/il_794xN.4350946747_lyy5.jpg',
        preview_image = False
    )

    I42 = ProductImage (
        product_id = 11,
        url = 'https://i.etsystatic.com/34382609/r/il/051644/3792866028/il_794xN.3792866028_bfos.jpg',
        preview_image = False
    )

    # p12
    I43 = ProductImage (
        product_id = 12,
        url = 'https://i.etsystatic.com/14125488/r/il/2dceec/4517006609/il_794xN.4517006609_sp9d.jpg',
        preview_image = True
    )

    I44 = ProductImage (
        product_id = 12,
        url = 'https://i.etsystatic.com/14125488/r/il/06f16e/4463602867/il_794xN.4463602867_3zh4.jpg',
        preview_image = False
    )

    I45 = ProductImage (
        product_id = 12,
        url = 'https://i.etsystatic.com/14125488/r/il/95dbcb/4351807410/il_794xN.4351807410_affg.jpg',
        preview_image = False
    )

    I46 = ProductImage (
        product_id = 12,
        url = 'https://i.etsystatic.com/14125488/r/il/6c5e71/4453844762/il_794xN.4453844762_fcq9.jpg',
        preview_image = False
    )

    # P13
    I47 = ProductImage (
        product_id = 13,
        url = 'https://i.etsystatic.com/26715779/r/il/57c2e5/3189488879/il_794xN.3189488879_ppuj.jpg',
        preview_image = True
    )

    I48 = ProductImage (
        product_id = 13,
        url = 'https://i.etsystatic.com/26715779/r/il/f432b7/3189488921/il_794xN.3189488921_2753.jpg',
        preview_image = False
    )

    I49 = ProductImage (
        product_id = 13,
        url = 'https://i.etsystatic.com/26715779/r/il/483a78/3141769260/il_794xN.3141769260_72pc.jpg',
        preview_image = False
    )

    I49 = ProductImage (
        product_id = 13,
        url = 'https://i.etsystatic.com/26715779/r/il/c1ee74/3189488775/il_794xN.3189488775_agfn.jpg',
        preview_image = False
    )

    # p14
    I50 = ProductImage (
        product_id = 14,
        url = 'https://i.etsystatic.com/24620229/r/il/31ed03/4107377716/il_794xN.4107377716_9gcu.jpg',
        preview_image = True
    )

    I50 = ProductImage (
        product_id = 14,
        url = 'https://i.etsystatic.com/24620229/r/il/283a3c/4155035019/il_794xN.4155035019_if8p.jpg',
        preview_image = False
    )

    I51 = ProductImage (
        product_id = 14,
        url = 'https://i.etsystatic.com/24620229/r/il/5658f0/4155034915/il_794xN.4155034915_7lbv.jpg',
        preview_image = False
    )

    I52 = ProductImage (
        product_id = 14,
        url = 'https://i.etsystatic.com/24620229/r/il/f6f720/4107378732/il_794xN.4107378732_h1wg.jpg',
        preview_image = False
    )

    # p15
    I53 = ProductImage (
        product_id = 15,
        url = 'https://i.etsystatic.com/5424402/r/il/e3f259/402135398/il_794xN.402135398_4s88.jpg',
        preview_image = True
    )

    I54 = ProductImage (
        product_id = 15,
        url = 'https://i.etsystatic.com/5424402/r/il/9bbbda/402135334/il_794xN.402135334_obu6.jpg',
        preview_image = False
    )

    I55 = ProductImage (
        product_id = 15,
        url = 'https://i.etsystatic.com/5424402/r/il/2b4a44/402135318/il_794xN.402135318_6z5i.jpg',
        preview_image = False
    )

    I56 = ProductImage (
        product_id = 15,
        url = 'https://i.etsystatic.com/5424402/r/il/6cc5b1/2053305139/il_794xN.2053305139_cmn2.jpg',
        preview_image = False
    )

    # p16
    I57 = ProductImage (
        product_id = 16,
        url = 'https://i.etsystatic.com/7831577/r/il/8d8a9c/2144291611/il_794xN.2144291611_my00.jpg',
        preview_image = True
    )

    I58 = ProductImage (
        product_id = 16,
        url = 'https://i.etsystatic.com/7831577/r/il/4129d9/2144292117/il_794xN.2144292117_2l6l.jpg',
        preview_image = False
    )

    I59 = ProductImage (
        product_id = 16,
        url = 'https://i.etsystatic.com/7831577/r/il/75c721/2144292465/il_794xN.2144292465_enev.jpg',
        preview_image = False
    )

    I60 = ProductImage (
        product_id = 16,
        url = 'https://i.etsystatic.com/7831577/r/il/f42962/2144292755/il_794xN.2144292755_l0ok.jpg',
        preview_image = False
    )

    # p17
    I61 = ProductImage (
        product_id = 17,
        url = 'https://i.etsystatic.com/25155098/r/il/50053d/4045930533/il_794xN.4045930533_m0ga.jpg',
        preview_image = True
    )
    I62 = ProductImage (
        product_id = 17,
        url = 'https://i.etsystatic.com/25155098/r/il/916cd4/3200142775/il_794xN.3200142775_qu70.jpg',
        preview_image = False
    )
    I63 = ProductImage (
        product_id = 17,
        url = 'https://i.etsystatic.com/25155098/r/il/7c4290/3735937485/il_794xN.3735937485_6zoq.jpg',
        preview_image = False
    )
    I64 = ProductImage (
        product_id = 17,
        url = 'https://i.etsystatic.com/25155098/r/il/d050d4/3152427990/il_794xN.3152427990_gmz3.jpg',
        preview_image = False
    )

    # p18
    I65 = ProductImage (
        product_id = 18,
        url = 'https://i.etsystatic.com/21530912/r/il/2f15a8/3630514386/il_794xN.3630514386_9jh9.jpg',
        preview_image = True
    )
    I66 = ProductImage (
        product_id = 18,
        url = 'https://i.etsystatic.com/21530912/r/il/3e734a/3630512104/il_794xN.3630512104_3aoy.jpg',
        preview_image = False
    )
    I67 = ProductImage (
        product_id = 18,
        url = 'https://i.etsystatic.com/21530912/r/il/462dca/3630512096/il_75x75.3630512096_j64k.jpg',
        preview_image = False
    )
    I68 = ProductImage (
        product_id = 18,
        url = 'https://i.etsystatic.com/21530912/r/il/e1359c/3630512092/il_75x75.3630512092_3ntf.jpg',
        preview_image = False
    )
    I69 = ProductImage (
        product_id = 18,
        url = 'https://i.etsystatic.com/21530912/r/il/a834f1/4223765011/il_75x75.4223765011_8yfh.jpg',
        preview_image = False
    )

    # p19
    I70 = ProductImage (
        product_id = 19,
        url = 'https://i.etsystatic.com/26006631/r/il/a14ddf/4454484896/il_794xN.4454484896_9nbi.jpg',
        preview_image = True
    )
    I71 = ProductImage (
        product_id = 19,
        url = 'https://i.etsystatic.com/26006631/r/il/3ed32c/4367576530/il_794xN.4367576530_qjbs.jpg',
        preview_image = False
    )
    I72 = ProductImage (
        product_id = 19,
        url = 'https://i.etsystatic.com/26006631/r/il/ef0077/4367579426/il_794xN.4367579426_hezl.jpg',
        preview_image = False
    )
    I73 = ProductImage (
        product_id = 19,
        url = 'https://i.etsystatic.com/26006631/r/il/a33399/4414970791/il_794xN.4414970791_mh6x.jpg',
        preview_image = False
    )

    #p20
    I74 = ProductImage (
        product_id = 20,
        url = 'https://i.etsystatic.com/26006631/r/il/a14ddf/4454484896/il_794xN.4454484896_9nbi.jpg',
        preview_image = True
    )
    I75 = ProductImage (
        product_id = 20,
        url = 'https://i.etsystatic.com/6110380/r/il/5b0bbc/487176315/il_794xN.487176315_605u.jpg',
        preview_image = False
    )
    I76 = ProductImage (
        product_id = 20,
        url = 'https://i.etsystatic.com/6110380/r/il/7300e2/487133020/il_794xN.487133020_muqo.jpg',
        preview_image = False
    )
    I77 = ProductImage (
        product_id = 20,
        url = 'https://i.etsystatic.com/6110380/r/il/ac9c5c/487132998/il_794xN.487132998_bgmn.jpg',
        preview_image = False
    )

    #p21
    I78 = ProductImage (
        product_id = 21,
        url = 'https://i.etsystatic.com/14596500/r/il/47e47b/3562546765/il_794xN.3562546765_3r5y.jpg',
        preview_image = True
    )
    I79 = ProductImage (
        product_id = 21,
        url = 'https://i.etsystatic.com/14596500/r/il/ad53a0/2096040301/il_794xN.2096040301_jnwn.jpg',
        preview_image = False
    )
    I80 = ProductImage (
        product_id = 21,
        url = 'https://i.etsystatic.com/14596500/r/il/7e08be/2096040355/il_794xN.2096040355_kkhh.jpg',
        preview_image = False
    )
    I81 = ProductImage (
        product_id = 21,
        url = 'https://i.etsystatic.com/14596500/r/il/fd582b/3304199964/il_794xN.3304199964_mcab.jpg',
        preview_image = False
    )

    #p22
    I82 = ProductImage (
        product_id = 22,
        url = 'https://i.etsystatic.com/32753543/r/il/a03c0f/4053315436/il_794xN.4053315436_9g6n.jpg',
        preview_image = True
    )
    I83 = ProductImage (
        product_id = 22,
        url = 'https://i.etsystatic.com/32753543/r/il/139140/4100958419/il_794xN.4100958419_qszu.jpg',
        preview_image = False
    )
    I84 = ProductImage (
        product_id = 22,
        url = 'https://i.etsystatic.com/32753543/r/il/76c532/4100957959/il_794xN.4100957959_pi7j.jpg',
        preview_image = False
    )
    I85 = ProductImage (
        product_id = 22,
        url = 'https://i.etsystatic.com/32753543/r/il/318f58/4100959173/il_794xN.4100959173_4mtp.jpg',
        preview_image = False
    )

    #p23
    I86 = ProductImage (
        product_id = 23,
        url = 'https://i.etsystatic.com/13267136/r/il/c1da32/1969717905/il_794xN.1969717905_tomw.jpg',
        preview_image = True
    )
    I87 = ProductImage (
        product_id = 23,
        url = 'https://i.etsystatic.com/13267136/r/il/c9c026/1922174700/il_794xN.1922174700_6ch8.jpg',
        preview_image = False
    )
    I88 = ProductImage (
        product_id = 23,
        url = 'https://i.etsystatic.com/13267136/r/il/f90d64/1922174298/il_794xN.1922174298_3j4q.jpg',
        preview_image = False
    )
    I89 = ProductImage (
        product_id = 23,
        url = 'https://i.etsystatic.com/13267136/r/il/7fb1a4/1922174524/il_794xN.1922174524_l6gc.jpg',
        preview_image = False
    )

    #p24
    I90 = ProductImage (
        product_id = 24,
        url = 'https://i.etsystatic.com/35057718/r/il/9b2cdc/3814892432/il_794xN.3814892432_a8ar.jpg',
        preview_image = True
    )
    I91 = ProductImage (
        product_id = 24,
        url = 'https://i.etsystatic.com/35057718/r/il/e6a97f/3814892464/il_794xN.3814892464_fk8z.jpg',
        preview_image = False
    )
    I92 = ProductImage (
        product_id = 24,
        url = 'https://i.etsystatic.com/35057718/r/il/ae4aa3/3814892508/il_794xN.3814892508_kud8.jpg',
        preview_image = False
    )
    I93 = ProductImage (
        product_id = 24,
        url = 'https://i.etsystatic.com/35057718/r/il/7ed16f/3814892716/il_794xN.3814892716_2vu5.jpg',
        preview_image = False
    )

    #p25
    I94 = ProductImage (
        product_id = 25,
        url = 'https://i.etsystatic.com/23794722/r/il/6b1869/2491977546/il_794xN.2491977546_j8cg.jpg',
        preview_image = True
    )
    I95 = ProductImage (
        product_id = 25,
        url = 'https://i.etsystatic.com/23794722/r/il/dd274d/3326297768/il_794xN.3326297768_1ajr.jpg',
        preview_image = False
    )
    I96 = ProductImage (
        product_id = 25,
        url = 'https://i.etsystatic.com/23794722/r/il/8f4694/2539646285/il_794xN.2539646285_j30a.jpg',
        preview_image = False
    )
    I97 = ProductImage (
        product_id = 25,
        url = 'https://i.etsystatic.com/23794722/r/il/a167ac/2484811409/il_794xN.2484811409_451l.jpg',
        preview_image = False
    )

    #p26
    I98 = ProductImage (
        product_id = 26,
        url = 'https://i.etsystatic.com/21088855/r/il/1fe7fd/3108792782/il_794xN.3108792782_qol2.jpg',
        preview_image = True
    )
    I99 = ProductImage (
        product_id = 26,
        url = 'https://i.etsystatic.com/21088855/r/il/d82821/3156509887/il_794xN.3156509887_eoe9.jpg',
        preview_image = False
    )
    I100 = ProductImage (
        product_id = 26,
        url = 'https://i.etsystatic.com/21088855/r/il/202052/3108791784/il_794xN.3108791784_epm6.jpg',
        preview_image = False
    )
    I101 = ProductImage (
        product_id = 26,
        url = 'https://i.etsystatic.com/21088855/r/il/f31c96/3156509111/il_794xN.3156509111_qzf9.jpg',
        preview_image = False
    )

    #p27
    I102 = ProductImage (
        product_id = 27,
        url = 'https://i.etsystatic.com/24253130/r/il/a90f10/4525479741/il_794xN.4525479741_eksk.jpg',
        preview_image = True
    )
    I103 = ProductImage (
        product_id = 27,
        url = 'https://i.etsystatic.com/24253130/r/il/5709f7/4467272981/il_794xN.4467272981_23a1.jpg',
        preview_image = False
    )
    I104 = ProductImage (
        product_id = 27,
        url = 'https://i.etsystatic.com/24253130/r/il/181d23/4419906222/il_794xN.4419906222_g3wm.jpg',
        preview_image = False
    )
    I105 = ProductImage (
        product_id = 27,
        url = 'https://i.etsystatic.com/24253130/r/il/fb7e8a/4467272983/il_794xN.4467272983_397d.jpg',
        preview_image = False
    )

     #p28
    I106 = ProductImage (
        product_id = 28,
        url = 'https://i.etsystatic.com/24169104/r/il/f6aef2/3969807618/il_794xN.3969807618_lw9q.jpg',
        preview_image = True
    )
    I107 = ProductImage (
        product_id = 28,
        url = 'https://i.etsystatic.com/24169104/r/il/aa8317/4334570176/il_794xN.4334570176_4ebu.jpg',
        preview_image = False
    )
    I108 = ProductImage (
        product_id = 28,
        url = 'https://i.etsystatic.com/24169104/r/il/acde6f/4352994391/il_794xN.4352994391_ioq6.jpg',
        preview_image = False
    )
    I109 = ProductImage (
        product_id = 28,
        url = 'https://i.etsystatic.com/24169104/r/il/63bd57/4305602866/il_794xN.4305602866_40i6.jpg',
        preview_image = False
    )

    #p29
    I110 = ProductImage (
        product_id = 29,
        url = 'https://i.etsystatic.com/5767277/r/il/cf7978/2621253599/il_794xN.2621253599_btcy.jpg',
        preview_image = True
    )
    I111 = ProductImage (
        product_id = 29,
        url = 'https://i.etsystatic.com/5767277/r/il/63bfbb/4110124926/il_794xN.4110124926_re3s.jpg',
        preview_image = False
    )
    I112 = ProductImage (
        product_id = 29,
        url = 'https://i.etsystatic.com/5767277/r/il/b97d2a/3001817505/il_794xN.3001817505_ndf5.jpg',
        preview_image = False
    )
    I113 = ProductImage (
        product_id = 29,
        url = 'https://i.etsystatic.com/5767277/r/il/20a716/3532489673/il_794xN.3532489673_qwbz.jpg',
        preview_image = False
    )















    db.session.add(I1)
    db.session.add(I2)
    db.session.add(I3)
    db.session.add(I4)
    db.session.add(I5)
    db.session.add(I6)
    db.session.add(I7)
    db.session.add(I8)
    db.session.add(I9)
    db.session.add(I10)
    db.session.add(I11)
    db.session.add(I12)
    db.session.add(I13)
    db.session.add(I14)
    db.session.add(I15)
    db.session.add(I16)
    db.session.add(I17)
    db.session.add(I18)
    db.session.add(I19)
    db.session.add(I20)
    db.session.add_all([I21,I22,I23,I24,I25,I26,I27,I28,I29,I30,I31,I32,I33,I34,I35,I36,I37,I38,I39,
    I40,I41,I42,I43,I44,I45,I46,I47,I48,I49,I50,I51,I52,I53,I54,I55,I56,I57,I58,I59,I60,I61,I62,I63,
    I64,I65,I66,I67,I68,I69,I70,I71,I72,I73,I74,I75,I76,I77,I78,I79,I80,I81,I82,I83,I84,I85,I86,I87,
    I88,I89,I90,I91,I92,I93,I94,I95,I96,I97,I98,I99,I100,I101,I102,I103,I104,I105,I106,I107,I108,I109,
    I110,I111,I112,I113
    ])




    db.session.commit()

def undo_product_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM product_images")

    db.session.commit()

0707070000010000000006660000000000000000010000001412305224000000700000000237.start fplayback -i on -r off -f 1 -e on -h on -t on -a on -k on -s 1
tcur 0
fps 24
tset 0 10
frange 1 240
unitlength 1
unitmass 1
prompt '`strcat(oppwf(), " -> ")`'
0707070000010000000006660000000000000000010000001412305224000001300000001054.variables set -g ACTIVETAKE = 'Main'
set -g E = '2.7182818284590452354'
set -g EYE = 'stereo'
set -g HIP = 'C:/projects/programming/hunt_the_wumpus/files/houdini'
set -g HIPFILE = 'C:/projects/programming/hunt_the_wumpus/files/houdini/dodecaedron.hip'
set -g HIPNAME = 'dodecaedron'
set -g JOB = 'C:/Users/Owner'
set -g PI = '3.1415926535897932384'
set -g POSE = 'C:/Users/Owner/Documents/houdini14.0/poselib'
set -g _HIP_SAVEPLATFORM = 'windows-x86_64-cl17'
set -g _HIP_SAVETIME = 'Thu Sep 23 14:19:12 2021'
set -g _HIP_SAVEVERSION = '14.0.258'
set -g status = '0'
0707070000010000000006660000000000000000010000001412305224000001100000000267.aliases alias cd 'opcf'
alias cp 'opcp'
alias h 'history'
alias hython 'python'
alias ls 'opls'
alias matramp 'opramp'
alias opcd 'opcf'
alias oppwd 'oppwf'
alias pwd 'oppwf'
alias rm 'oprm'
0707070000010000000006660000000000000000010000001412305224000001400000000021.takeconfig takename -g take
0707070000010000000006660000000000000000010000001412305224000001500000000000.hou.session 0707070000010000000006660000000000000000010000001412305224000001500000000000.OPlibraries 0707070000010000000006660000000000000000010000001412305224000001700000000000.OPpreferences 0707070000010000000006660000000000000000010000001412305224000001500000000660.OPfallbacks Sop/attribwrangle C:/PROGRA~1/SIDEEF~1/HOUDIN~1.258/houdini/otls/OPlibSop.hda
Sop/attribwrangle otls/OPlibSop.hda
Sop/platonic C:/PROGRA~1/SIDEEF~1/HOUDIN~1.258/houdini/otls/OPlibSop.hda
Sop/platonic otls/OPlibSop.hda
Sop/matchaxis C:/PROGRA~1/SIDEEF~1/HOUDIN~1.258/houdini/otls/OPlibSop.hda
Sop/matchaxis otls/OPlibSop.hda
Vop/align C:/PROGRA~1/SIDEEF~1/HOUDIN~1.258/houdini/otls/OPlibScripted.hda
Vop/align otls/OPlibScripted.hda
0707070000010000000006660000000000000000010000001412305224000001500000021635.OPdummydefs INDX              INDEX_SECTION      ,aLT�   Sop/attribwrangle  ,  �aLP�   Sop/platonic  �  laLNx   Sop/matchaxis  \  �aLNx   	Vop/align      �aLNx         attribwrangle   Attribute Wrangle   *oplib:/Sop/attribwrangle?Sop/attribwrangle   SOP_attribwrangle           Sop                       aLT�       platonic   Platonic Solids    oplib:/Sop/platonic?Sop/platonic   SOP_platonic           Sop   subnet   SUBsop                aLT�       	matchaxis   
Match Axis   "oplib:/Sop/matchaxis?Sop/matchaxis   SOP_matchaxis           Sop                      aLT�       align   Align   oplib:/Vop/align?Vop/align   	VOP_align           Vop   vop   VOPall                aLT�  INDX              Contents       WaLP�   DialogScript   W  )T�D0707070000010000000006660000000000000000010000001412305021400001300000000000TRAILER!!! # Dialog script for attribwrangle automatically generated 02/09/15 14:53:40

{
    name	attribwrangle
    script	attribwrangle
    label	"Attribute Wrangle"

    help {
	""
    }

    inputlabel	1	"Geometry to Process with Wrangle"
    inputlabel	2	"Ancillary Input, point(1, ...) to Access"
    inputlabel	3	"Ancillary Input, point(2, ...) to Access"
    inputlabel	4	"Ancillary Input, point(3, ...) to Access"

    group {
	name	"folder0"
	label	"Code"

	parm {
	    name	"group"
	    label	"Group"
	    type	string
	    default	{ "" }
	    menutoggle	{
		[ "opmenu -l attribvop1 bindgroup" ]
	    }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "autoscope" "0000000000000000" }
	    parmtag	{ "script_action" "import soputils\nkwargs['geometrytype'] = kwargs['node'].parmTuple('grouptype')\nkwargs['inputindex'] = 0\nsoputils.selectGroupParm(kwargs)" }
	    parmtag	{ "script_action_help" "Select geometry from an available viewport." }
	    parmtag	{ "script_action_icon" "BUTTONS_reselect" }
	    bindselector points "Modify Points"
	        "Select the points to affect and press Enter to complete."
	        0 1 0xffffffff 0 grouptype 0
	}
	parm {
	    name	"grouptype"
	    label	"Group Type"
	    type	ordinal
	    default	{ "guess" }
	    menu	{
		"guess"	"Guess from Group"
		"vertices"	"Vertices"
		"edges"	"Edges"
		"points"	"Points"
		"prims"	"Primitives"
	    }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "autoscope" "0000000000000000" }
	}
	parm {
	    name	"class"
	    label	"Run Over"
	    type	ordinal
	    default	{ "point" }
	    menu	{
		"detail"	"Detail (only once)"
		"primitive"	"Primitives"
		"point"	"Points"
		"vertex"	"Vertices"
	    }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "autoscope" "0000000000000000" }
	}
	parm {
	    name	"snippet"
	    label	"VEXpression"
	    type	string
	    default	{ "" }
	    menureplace	{
		[ "import vexpressionmenu" ]
		[ "" ]
		[ "return vexpressionmenu.buildSnippetMenu('attribwrangle/snippet')" ]
		language	python
	    }
	    range	{ 0 1 }
	    export	all
	    parmtag	{ "autoscope" "0000000000000000" }
	    parmtag	{ "editor" "1" }
	    parmtag	{ "editorlang" "VEX" }
	    parmtag	{ "editorlines" "8-30" }
	    parmtag	{ "script_action" "import vexpressionmenu\n\nnode = kwargs['node']\nparmname = 'snippet'\n\nvexpressionmenu.createSpareParmsFromChCalls(node, parmname)" }
	    parmtag	{ "script_action_help" "Creates spare parameters for each unique call of ch() " }
	    parmtag	{ "script_action_icon" "BUTTONS_create_parm_from_ch" }
	}
	parm {
	    name	"exportlist"
	    label	"Attributes to Create"
	    type	string
	    default	{ "*" }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "autoscope" "0000000000000000" }
	}
	parm {
	    name	"vex_strict"
	    label	"Enforce Prototypes"
	    type	toggle
	    default	{ "off" }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "autoscope" "0000000000000000" }
	    parmtag	{ "script_callback" "" }
	}
    }

    group {
	name	"folder0_1"
	label	"Bindings"

	parm {
	    name	"autobind"
	    label	"Autobind by Name"
	    type	toggle
	    default	{ "on" }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "autoscope" "0000000000000000" }
	}
	multiparm {
	    name	"bindings"
	    label	"Number of Bindings"
	    default	0
	    parmtag	{ "autoscope" "0000000000000000" }
	    parmtag	{ "multistartoffset" "1" }

	    parm {
		name	"bindname#"
		label	"Attribute Name"
		type	string
		default	{ "" }
		range	{ 0 1 }
		export	none
	    }
	    parm {
		name	"bindparm#"
		label	"VEX Parameter"
		type	string
		default	{ "" }
		range	{ 0 1 }
		export	none
	    }
	}

	parm {
	    name	"groupautobind"
	    label	"Autobind Groups by Name"
	    type	toggle
	    default	{ "on" }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "autoscope" "0000000000000000" }
	}
	multiparm {
	    name	"groupbindings"
	    label	"Group Bindings"
	    default	0
	    parmtag	{ "autoscope" "0000000000000000" }
	    parmtag	{ "multistartoffset" "1" }

	    parm {
		name	"bindgroupname#"
		label	"Group Name"
		type	string
		default	{ "" }
		range	{ 0 1 }
		export	none
	    }
	    parm {
		name	"bindgroupparm#"
		label	"VEX Parameter"
		type	string
		default	{ "" }
		range	{ 0 1 }
		export	none
	    }
	}

	parm {
	    name	"vex_cwdpath"
	    label	"Evaluation Node Path"
	    type	oppath
	    default	{ "." }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "autoscope" "0000000000000000" }
	    parmtag	{ "oprelative" "." }
	}
	parm {
	    name	"vex_outputmask"
	    label	"Export Parameters"
	    type	string
	    default	{ "*" }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "autoscope" "0000000000000000" }
	}
	parm {
	    name	"vex_updatenmls"
	    label	"Update Normals If Displaced"
	    type	toggle
	    default	{ "off" }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "autoscope" "0000000000000000" }
	    parmtag	{ "script_callback" "" }
	}
    }

}
INDX              Contents       WaLNx   DialogScript   W  �M'g�0707070000010000000006660000000000000000010000001412304717000001300000000000TRAILER!!! # Dialog script for platonic automatically generated 01/07/11 14:22:07

{
    name	platonic
    script	platonic
    label	"Platonic Solids"

    help {
	""
    }
    bindhandle t1 sphere "Transformer" tx ""
    bindhandle t2 sphere "Transformer" ty ""
    bindhandle t3 sphere "Transformer" tz ""

    parm {
	name	"type"
	label	"Solid Type"
	type	integer
	default	{ "0" }
	menu	{
	    "0"	"Tetrahedron"
	    "1"	"Cube"
	    "2"	"Octahedron"
	    "3"	"Icosahedron"
	    "4"	"Dodecahedron"
	    "5"	"Soccer Ball"
	    "6"	"Utah Teapot"
	}
	range	{ 0 10 }
	export	all
    }
    parm {
	name	"orient"
	label	"Orientation"
	type	ordinal
	default	{ "y" }
	menu	{
	    "x"	"X axis"
	    "y"	"Y axis"
	    "z"	"Z axis"
	}
	range	{ 0 1 }
	export	none
    }
    parm {
	name	"radius"
	label	"Radius"
	type	float
	default	{ "1" }
	range	{ 0 10 }
	export	all
    }
    parm {
	name	"t"
	label	"Position"
	type	float
	size	3
	default	{ "0" "0" "0" }
	range	{ 0 10 }
	export	dialog
    }
}
INDX              Contents       WaLNx   DialogScript   W  	TF��0707070000010000000006660000000000000000010000001412304717000001300000000000TRAILER!!! # Dialog script for matchaxis automatically generated 05/06/14 15:15:18

{
    name	matchaxis
    script	match_axis
    label	"Match Axis"

    help {
	""
    }
    bindhandle to1 vector "Vector" vx ""
    bindhandle to2 vector "Vector" vy ""
    bindhandle to3 vector "Vector" vz ""

    inputlabel	1	"Geometry to Resize and Align"
    inputlabel	2	"Sub-Network Input #2"
    inputlabel	3	"Sub-Network Input #3"
    inputlabel	4	"Sub-Network Input #4"

    parm {
	name	"group"
	label	"Point Group"
	type	string
	default	{ "" }
	menutoggle	{
	    [ "opmenu -l vopsop1 vex_group" ]
	}
	range	{ 0 1 }
	export	none
	parmtag	{ "autoscope" "0000000000000000" }
	parmtag	{ "script_action" "import soputils\nkwargs['geometrytype'] = hou.geometryType.Points\nkwargs['inputindex'] = 0\nsoputils.selectGroupParm(kwargs)" }
	parmtag	{ "script_action_help" "Select geometry from an available viewport." }
	parmtag	{ "script_action_icon" "BUTTONS_reselect" }
    }
    parm {
	name	"from"
	label	"From Vector"
	type	float
	size	3
	default	{ "0" "1" "0" }
	range	{ 0 10 }
	export	none
	parmtag	{ "autoscope" "0000000000000000" }
    }
    parm {
	name	"to"
	label	"To Vector"
	type	float
	size	3
	default	{ "0" "1" "0" }
	range	{ 0 10 }
	export	none
	parmtag	{ "autoscope" "0000000000000000" }
    }
}
INDX              DialogScript      �T�c:/*
 * PROPRIETARY INFORMATION.  This software is proprietary to
 * Side Effects Software Inc., and is not to be reproduced,
 * transmitted, or disclosed in any way without written permission.
 *
 * Produced by:
 *	Side Effects Software Inc
 *	477 Richmond Street West
 *	Toronto, Ontario
 *	Canada   M5V 3E7
 *	416-504-9876
 *
 */

#include <parameter.ds>

{
    name	"align"
    script	"align"
    label	"align"


    code {
	"$matx = dihedral($from, $to);"
    }

    output	matrix3	matx	"Rotation Matrix"

    VOP_VEC_INPUT(from,	"Vector To Rotate From", 1, 0, 0)
    VOP_VEC_INPUT(to,	"Vector To Rotate To",   0, 1, 0)

    signature	"Matrix 3"		default	{ }
    signature	"Angle Axis"		v	{ vector vector vector4 }

}
0707070000010000000006660000000000000000010000001412305224000002000000000012expression.func # 0 bytes
0707070000010000000006660000000000000000010000001412305224000001000000000637obj.def comment ""
position 5 2
cachesize 1
connectornextid 0
flags =  lock off model off template off footprint off xray off bypass off display on render on highlight off unload off savedata off compress off exposed on
outputsNamed3
{
}
inputsNamed3
{
}
inputs
{
}
stat
{
  create 1632390735
  modify 1632390776
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000001100000000020obj.parm {
version 0.8
}
0707070000010000000006660000000000000000010000001412305224000001500000000041obj.userdata     ___Version___    14.0.2580707070000010000000006660000000000000000010000001412305224000002200000000032obj/platonic.init type = geo
matchesdef = 0
0707070000010000000006660000000000000000010000001412305224000002100000001075obj/platonic.def objflags objflags =  origin off
pretransform UT_DMatrix4 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1
comment ""
position 3.67049 5.28232
cachesize 1
connectornextid 2
flags =  lock off model off template off footprint off xray off bypass off display on render off highlight off unload off savedata off compress off exposed on selectable on
outputsNamed3
{
1 "output1"
}
inputsNamed3
{
0 	"" "" 1 "input1"
}
inputs
{
0 	"" 0 1
}
stat
{
  create 1632390776
  modify 1632392343
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000003200000023717obj/platonic.spareparmdef     group {
	name	"stdswitcher5"
	label	"Transform"

	parm {
	    name	"keeppos"
	    baseparm
	    joinnext
	    export	none
	}
	parm {
	    name	"pre_xform"
	    baseparm
	    export	none
	}
	parm {
	    name	"xOrd"
	    baseparm
	    joinnext
	    export	none
	}
	parm {
	    name	"rOrd"
	    baseparm
	    export	none
	}
	parm {
	    name	"t"
	    baseparm
	    export	all
	}
	parm {
	    name	"r"
	    baseparm
	    export	all
	}
	parm {
	    name	"s"
	    baseparm
	    export	none
	}
	parm {
	    name	"p"
	    baseparm
	    export	none
	}
	parm {
	    name	"scale"
	    baseparm
	    export	none
	}
	parm {
	    name	"lookatpath"
	    baseparm
	    export	none
	}
	parm {
	    name	"lookup"
	    baseparm
	    export	none
	}
	parm {
	    name	"pathobjpath"
	    baseparm
	    export	none
	}
	parm {
	    name	"roll"
	    baseparm
	    export	none
	}
	parm {
	    name	"pos"
	    baseparm
	    export	none
	}
	parm {
	    name	"uparmtype"
	    baseparm
	    export	none
	}
	parm {
	    name	"pathorient"
	    baseparm
	    export	none
	}
	parm {
	    name	"up"
	    baseparm
	    export	none
	}
	parm {
	    name	"bank"
	    baseparm
	    export	none
	}
    }

    group {
	name	"stdswitcher5_1"
	label	"Material"

	parm {
	    name	"shop_materialpath"
	    baseparm
	    joinnext
	    export	none
	}
	parm {
	    name	"shop_materialopts"
	    baseparm
	    export	none
	}
    }

    group {
	name	"stdswitcher5_2"
	label	"Render"

	parm {
	    name	"tdisplay"
	    baseparm
	    joinnext
	    export	none
	}
	parm {
	    name	"display"
	    baseparm
	    export	none
	}
	parm {
	    name	"viewportlod"
	    label	"Display As"
	    type	ordinal
	    default	{ "full" }
	    help	"Choose how the object's geometry should be rendered in the viewport"
	    menu	{
		"full"	"Full Geometry"
		"points"	"Point Cloud"
		"box"	"Bounding Box"
		"centroid"	"Centroid"
		"hidden"	"Hidden"
		"subd"	"Subdivision Surface"
	    }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "spare_category" "Render" }
	}
	parm {
	    name	"vm_rendervisibility"
	    label	"Render Visibility"
	    type	string
	    default	{ "*" }
	    menureplace	{
		"*"	"Visible to all"
		"primary"	"Visible only to primary rays"
		"primary|shadow"	"Visible only to primary and shadow rays"
		"-primary"	"Invisible to primary rays (Phantom)"
		"-diffuse"	"Invisible to diffuse rays"
		"-diffuse&-reflect&-refract"	"Invisible to secondary rays"
		""	"Invisible (Unrenderable)"
	    }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "spare_category" "Render" }
	}
	parm {
	    name	"vm_rendersubd"
	    label	"Render Polygons As Subdivision (Mantra)"
	    type	toggle
	    default	{ "0" }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "spare_category" "Geometry" }
	}
	parm {
	    name	"vm_subdstyle"
	    label	"Subdivision Style"
	    type	string
	    default	{ "mantra_catclark" }
	    hidewhen	"{ vm_rendersubd == 0 }"
	    menu	{
		"mantra_catclark"	"Mantra Catmull-Clark"
		"osd_catclark"	"OpenSubdiv Catmull-Clark"
	    }
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "spare_category" "Geometry" }
	}
	parm {
	    name	"vm_subdgroup"
	    label	"Subdivision Group"
	    type	string
	    default	{ "" }
	    hidewhen	"{ vm_rendersubd == 0 }"
	    range	{ 0 1 }
	    export	none
	    parmtag	{ "spare_category" "Geometry" }
	}
	group {
	    name	"folder0"
	    label	"Shading"

	    parm {
		name	"categories"
		label	"Categories"
		type	string
		default	{ "" }
		help	"A list of tags which can be used to select the object"
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Shading" }
	    }
	    parm {
		name	"reflectmask"
		label	"Reflection Mask"
		type	oplist
		default	{ "*" }
		help	"Objects that will be reflected on this object."
		range	{ 0 1 }
		export	none
		parmtag	{ "opexpand" "1" }
		parmtag	{ "opfilter" "!!OBJ/GEOMETRY!!" }
		parmtag	{ "oprelative" "/obj" }
		parmtag	{ "spare_category" "Shading" }
	    }
	    parm {
		name	"refractmask"
		label	"Refraction Mask"
		type	oplist
		default	{ "*" }
		help	"Objects that will be refracted on this object."
		range	{ 0 1 }
		export	none
		parmtag	{ "opexpand" "1" }
		parmtag	{ "opfilter" "!!OBJ/GEOMETRY!!" }
		parmtag	{ "oprelative" "/obj" }
		parmtag	{ "spare_category" "Shading" }
	    }
	    parm {
		name	"lightmask"
		label	"Light Mask"
		type	oplist
		default	{ "*" }
		help	"Lights that illuminate this object."
		range	{ 0 1 }
		export	none
		parmtag	{ "opexpand" "1" }
		parmtag	{ "opfilter" "!!OBJ/LIGHT!!" }
		parmtag	{ "oprelative" "/obj" }
		parmtag	{ "spare_category" "Shading" }
	    }
	    parm {
		name	"vm_volumefilter"
		label	"Volume Filter"
		type	string
		default	{ "box" }
		menu	{
		    "box"	"Box Filter"
		    "gaussian"	"Gaussian"
		    "bartlett"	"Bartlett (triangle)"
		    "catrom"	"Catmull-Rom"
		    "hanning"	"Hanning"
		    "blackman"	"Blackman"
		    "sinc"	"Sinc (sharpening)"
		}
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Shading" }
	    }
	    parm {
		name	"vm_volumefilterwidth"
		label	"Volume Filter Width"
		type	float
		default	{ "1" }
		range	{ 0.001 5 }
		export	none
		parmtag	{ "spare_category" "Shading" }
	    }
	    parm {
		name	"vm_matte"
		label	"Matte shading"
		type	toggle
		default	{ "0" }
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Shading" }
	    }
	    parm {
		name	"vm_rayshade"
		label	"Raytrace Shading"
		type	toggle
		default	{ "0" }
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Shading" }
	    }
	}

	group {
	    name	"folder0_1"
	    label	"Sampling"

	    parm {
		name	"geo_velocityblur"
		label	"Geometry Velocity Blur"
		type	toggle
		default	{ "0" }
		disablewhen	"{ allowmotionblur == 0 }"
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Sampling" }
	    }
	}

	group {
	    name	"folder0_2"
	    label	"Dicing"

	    parm {
		name	"vm_shadingquality"
		label	"Shading Quality"
		type	float
		default	{ "1" }
		range	{ 0 10 }
		export	none
		parmtag	{ "spare_category" "Dicing" }
	    }
	    parm {
		name	"vm_flatness"
		label	"Dicing Flatness"
		type	float
		default	{ "0.05" }
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Dicing" }
	    }
	    parm {
		name	"vm_raypredice"
		label	"Ray Predicing"
		type	integer
		default	{ "0" }
		menu	{
		    "0"	"Disable Predicing"
		    "1"	"Full Predicing"
		    "2"	"Precompute Bounds"
		}
		range	{ 0 10 }
		export	none
		parmtag	{ "spare_category" "Dicing" }
	    }
	    parm {
		name	"vm_curvesurface"
		label	"Shade Curves As Surfaces"
		type	toggle
		default	{ "0" }
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Dicing" }
	    }
	}

	group {
	    name	"folder0_3"
	    label	"Geometry"

	    parm {
		name	"vm_rmbackface"
		label	"Backface Removal"
		type	toggle
		default	{ "0" }
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"shop_geometrypath"
		label	"Procedural Shader"
		type	oppath
		default	{ "" }
		range	{ 0 1 }
		export	none
		parmtag	{ "opfilter" "!!SHOP/GEOMETRY!!" }
		parmtag	{ "oprelative" "." }
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"vm_forcegeometry"
		label	"Force Procedural Geometry Output"
		type	toggle
		default	{ "1" }
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"vm_renderpoints"
		label	"Render As Points (Mantra)"
		type	integer
		default	{ "2" }
		menu	{
		    "0"	"No Point Rendering"
		    "1"	"Render Only Points"
		    "2"	"Render Unconnected Points"
		}
		range	{ 0 10 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"vm_renderpointsas"
		label	"Render Points As (Mantra)"
		type	integer
		default	{ "0" }
		disablewhen	"{ vm_renderpoints == 0 }"
		menu	{
		    "0"	"Spheres"
		    "1"	"Circles"
		}
		range	{ 0 10 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"vm_usenforpoints"
		label	"Use N For Point Rendering"
		type	toggle
		default	{ "0" }
		disablewhen	"{ vm_renderpoints == 0 }"
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"vm_pointscale"
		label	"Point Scale"
		type	float
		default	{ "1" }
		disablewhen	"{ vm_renderpoints == 0 }"
		range	{ 0! 10 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"vm_pscalediameter"
		label	"Treat Point Scale as Diameter Instead of Radius"
		type	toggle
		default	{ "0" }
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"vm_metavolume"
		label	"Metaballs as Volume"
		type	toggle
		default	{ "0" }
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"vm_coving"
		label	"Coving"
		type	integer
		default	{ "1" }
		menu	{
		    "0"	"Disable Coving"
		    "1"	"Coving for displacement/sub-d"
		    "2"	"Coving for all primitives"
		}
		range	{ 0 10 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"vm_materialoverride"
		label	"Material Override"
		type	string
		default	{ "compact" }
		menu	{
		    "none"	"Disabled"
		    "full"	"Evaluate for Each Primitve/Point"
		    "compact"	"Evaluate Once"
		}
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"vm_computeN"
		label	"Automatically Compute Normals"
		type	toggle
		default	{ "1" }
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	    parm {
		name	"vm_overridedetail"
		label	"Ignore Geometry Attribute Shaders"
		type	toggle
		default	{ "0" }
		range	{ 0 1 }
		export	none
		parmtag	{ "spare_category" "Geometry" }
	    }
	}

    }

    group {
	name	"stdswitcher5_3"
	label	"Misc"

	parm {
	    name	"use_dcolor"
	    baseparm
	    export	none
	}
	parm {
	    name	"dcolor"
	    baseparm
	    export	none
	}
	parm {
	    name	"picking"
	    baseparm
	    export	none
	}
	parm {
	    name	"pickscript"
	    baseparm
	    export	none
	}
	parm {
	    name	"caching"
	    baseparm
	    export	none
	}
	parm {
	    name	"vport_shadeopen"
	    baseparm
	    export	none
	}
	parm {
	    name	"vport_displayassubdiv"
	    baseparm
	    invisible
	    export	none
	}
    }

0707070000010000000006660000000000000000010000001412305224000002200000004222obj/platonic.parm {
version 0.8
stdswitcher	[ 0	locks=0 ]	(	0	0	0	0	)
keeppos	[ 0	locks=0 ]	(	"off"	)
pre_xform	[ 0	locks=0 ]	(	0	)
xOrd	[ 0	locks=0 ]	(	"srt"	)
rOrd	[ 0	locks=0 ]	(	"xyz"	)
t	[ 0	locks=0 ]	(	0	0	0	)
r	[ 0	locks=0 ]	(	0	0	0	)
s	[ 0	locks=0 ]	(	1	1	1	)
p	[ 0	locks=0 ]	(	0	0	0	)
scale	[ 0	locks=0 ]	(	1	)
lookatpath	[ 0	locks=0 ]	(	""	)
lookup	[ 0	locks=0 ]	(	on	)
pathobjpath	[ 0	locks=0 ]	(	""	)
roll	[ 0	locks=0 ]	(	0	)
pos	[ 0	locks=0 ]	(	0	)
uparmtype	[ 0	locks=0 ]	(	"arc"	)
pathorient	[ 0	locks=0 ]	(	1	)
up	[ 0	locks=0 ]	(	0	1	0	)
bank	[ 0	locks=0 ]	(	0	)
shop_materialpath	[ 0	locks=0 ]	(	""	)
shop_materialopts	[ 0	locks=0 ]	(	0	)
tdisplay	[ 0	locks=0 ]	(	"off"	)
display	[ 0	locks=0 ]	(	1	)
use_dcolor	[ 0	locks=0 ]	(	"off"	)
dcolor	[ 0	locks=0 ]	(	1	1	1	)
picking	[ 0	locks=0 ]	(	"on"	)
pickscript	[ 0	locks=0 ]	(	""	)
caching	[ 0	locks=0 ]	(	"off"	)
vport_shadeopen	[ 0	locks=0 ]	(	"off"	)
vport_displayassubdiv	[ 0	locks=0 ]	(	"off"	)
stdswitcher5	[ 0	locks=0 ]	(	0	0	0	0	)
viewportlod	[ 0	locks=0 ]	(	"full"	)
vm_rendervisibility	[ 0	locks=0 ]	(	*	)
vm_rendersubd	[ 0	locks=0 ]	(	"off"	)
vm_subdstyle	[ 0	locks=0 ]	(	mantra_catclark	)
vm_subdgroup	[ 0	locks=0 ]	(	""	)
folder0	[ 0	locks=0 ]	(	0	0	0	0	)
categories	[ 0	locks=0 ]	(	""	)
reflectmask	[ 0	locks=0 ]	(	*	)
refractmask	[ 0	locks=0 ]	(	*	)
lightmask	[ 0	locks=0 ]	(	*	)
vm_volumefilter	[ 0	locks=0 ]	(	box	)
vm_volumefilterwidth	[ 0	locks=0 ]	(	1	)
vm_matte	[ 0	locks=0 ]	(	"off"	)
vm_rayshade	[ 0	locks=0 ]	(	"off"	)
geo_velocityblur	[ 0	locks=0 ]	(	"off"	)
vm_shadingquality	[ 0	locks=0 ]	(	1	)
vm_flatness	[ 0	locks=0 ]	(	0.050000000000000003	)
vm_raypredice	[ 0	locks=0 ]	(	0	)
vm_curvesurface	[ 0	locks=0 ]	(	"off"	)
vm_rmbackface	[ 0	locks=0 ]	(	"off"	)
shop_geometrypath	[ 0	locks=0 ]	(	""	)
vm_forcegeometry	[ 0	locks=0 ]	(	"on"	)
vm_renderpoints	[ 0	locks=0 ]	(	2	)
vm_renderpointsas	[ 0	locks=0 ]	(	0	)
vm_usenforpoints	[ 0	locks=0 ]	(	"off"	)
vm_pointscale	[ 0	locks=0 ]	(	1	)
vm_pscalediameter	[ 0	locks=0 ]	(	"off"	)
vm_metavolume	[ 0	locks=0 ]	(	"off"	)
vm_coving	[ 0	locks=0 ]	(	1	)
vm_materialoverride	[ 0	locks=0 ]	(	compact	)
vm_computeN	[ 0	locks=0 ]	(	"on"	)
vm_overridedetail	[ 0	locks=0 ]	(	"off"	)
}
0707070000010000000006660000000000000000010000001412305224000002600000000041obj/platonic.userdata     ___Version___    14.0.2580707070000010000000006660000000000000000010000001412305224000003400000000037obj/platonic/platonic1.init type = platonic
matchesdef = 1
0707070000010000000006660000000000000000010000001412305224000003300000000720obj/platonic/platonic1.def sopflags sopflags = 
comment ""
position -0.564706 1.10588
cachesize 1
connectornextid 1
flags =  lock off model off template off footprint off xray off bypass off display off render off highlight off unload off savedata off compress off exposed on
outputsNamed3
{
0 "output1"
}
inputsNamed3
{
}
inputs
{
}
stat
{
  create 1632390776
  modify 1632391064
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000003400000000173obj/platonic/platonic1.parm {
version 0.8
type	[ 0	locks=0 ]	(	4	)
orient	[ 0	locks=0 ]	(	"y"	)
radius	[ 0	locks=0 ]	(	1	)
t	[ 0	locks=0 ]	(	0	0	0	)
}
0707070000010000000006660000000000000000010000001412305224000004000000000121obj/platonic/platonic1.userdata     ___toolid___    sop_platonic ___toolcount___    1 ___Version___     0707070000010000000006660000000000000000010000001412305224000004100000000044obj/platonic/attribwrangle1.init type = attribwrangle
matchesdef = 1
0707070000010000000006660000000000000000010000001412305224000004000000001114obj/platonic/attribwrangle1.def sopflags sopflags = 
comment ""
position -0.564706 -1.27059
cachesize 1
connectornextid 5
flags =  lock off model off template off footprint off xray off bypass off display on render on highlight off unload off savedata off compress off exposed on
outputsNamed3
{
4 "output1"
}
inputsNamed3
{
0 	sort1 1 1 "input1"
1 	"" "" 1 "input2"
2 	"" "" 1 "input3"
3 	"" "" 1 "input4"
}
inputs
{
0 	sort1 0 1
1 	"" 0 1
2 	"" 0 1
3 	"" 0 1
}
stat
{
  create 1632391308
  modify 1632392345
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000004100000001003obj/platonic/attribwrangle1.parm {
version 0.8
folder0	[ 0	locks=0 ]	(	0	0	)
group	[ 0	locks=0 ]	(	""	)
grouptype	[ 0	locks=0 ]	(	"guess"	)
class	[ 0	locks=0 ]	(	"point"	)
snippet	[ 0	locks=0 ]	(	"i[]@neighbours = neighbours(0, @ptnum);

"	)
exportlist	[ 0	locks=0 ]	(	*	)
vex_strict	[ 0	locks=0 ]	(	"off"	)
autobind	[ 0	locks=0 ]	(	"on"	)
bindings	[ 0	locks=0 ]	(	0	)
groupautobind	[ 0	locks=0 ]	(	"on"	)
groupbindings	[ 0	locks=0 ]	(	0	)
vex_cwdpath	[ 0	locks=0 ]	(	.	)
vex_outputmask	[ 0	locks=0 ]	(	*	)
vex_updatenmls	[ 0	locks=0 ]	(	"off"	)
}
0707070000010000000006660000000000000000010000001412305224000004500000000031obj/platonic/attribwrangle1.userdata     ___Version___     0707070000010000000006660000000000000000010000001412305224000001000000000645vex.def comment ""
position 5.5 2.5
cachesize 1
connectornextid 0
flags =  lock off model off template off footprint off xray off bypass off display off render off highlight off unload off savedata off compress off exposed on
outputsNamed3
{
}
inputsNamed3
{
}
inputs
{
}
stat
{
  create 1632390735
  modify 1632390736
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000001100000000020vex.parm {
version 0.8
}
0707070000010000000006660000000000000000010000001412305224000001500000000041vex.userdata     ___Version___    14.0.2580707070000010000000006660000000000000000010000001412305224000003000000000033obj/platonic/sort1.init type = sort
matchesdef = 0
0707070000010000000006660000000000000000010000001412305224000002700000000774obj/platonic/sort1.def sopflags sopflags = 
comment ""
position -0.564706 0.176471
cachesize 1
connectornextid 2
flags =  lock off model off template off footprint off xray off bypass off display off render off highlight off unload off savedata off compress off exposed on
outputsNamed3
{
1 "output1"
}
inputsNamed3
{
0 	platonic1 0 1 "input1"
}
inputs
{
0 	platonic1 0 1
}
stat
{
  create 1632391059
  modify 1632392132
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000003000000001301obj/platonic/sort1.parm {
version 0.8
stdswitcher	[ 0	locks=0 ]	(	0	0	)
ptsort	[ 0	locks=0 ]	(	"seed"	)
pointseed	[ 0	locks=0 ]	(	0	)
pointoffset	[ 0	locks=0 ]	(	0	)
pointprox	[ 0	locks=0 ]	(	0	0	0	)
pointobjpath	[ 0	locks=0 ]	(	""	)
pointdir	[ 0	locks=0 ]	(	0	1	0	)
pointexpr	[ 0	locks=0 ]	(	0	)
pointattrib	[ 0	locks=0 ]	(	""	)
pointattribcomp	[ 0	locks=0 ]	(	0	)
pointreverse	[ 0	locks=0 ]	(	"off"	)
primsort	[ 0	locks=0 ]	(	"none"	)
primseed	[ 0	locks=0 ]	(	0	)
primoffset	[ 0	locks=0 ]	(	0	)
primprox	[ 0	locks=0 ]	(	0	0	0	)
primobjpath	[ 0	locks=0 ]	(	""	)
primdir	[ 0	locks=0 ]	(	0	1	0	)
primexpr	[ 0	locks=0 ]	(	0	)
primattrib	[ 0	locks=0 ]	(	""	)
primattribcomp	[ 0	locks=0 ]	(	0	)
primreverse	[ 0	locks=0 ]	(	"off"	)
}
0707070000010000000006660000000000000000010000001412305224000003400000000041obj/platonic/sort1.userdata     ___Version___    14.0.2580707070000010000000006660000000000000000010000001412305224000002300000000041obj/platonic.order 3
platonic1
sort1
attribwrangle1
0707070000010000000006660000000000000000010000001412305224000002100000000002obj/platonic.net 1
0707070000010000000006660000000000000000010000001412305224000001200000000013obj.order 1
platonic
0707070000010000000006660000000000000000010000001412305224000001000000000002obj.net 1
0707070000010000000006660000000000000000010000001412305224000001000000000643out.def comment ""
position 5 0.5
cachesize 1
connectornextid 0
flags =  lock off model off template off footprint off xray off bypass off display off render off highlight off unload off savedata off compress off exposed on
outputsNamed3
{
}
inputsNamed3
{
}
inputs
{
}
stat
{
  create 1632390735
  modify 1632390736
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000001100000000020out.parm {
version 0.8
}
0707070000010000000006660000000000000000010000001412305224000001500000000041out.userdata     ___Version___    14.0.2580707070000010000000006660000000000000000010000001412305224000001000000000002out.net 1
0707070000010000000006660000000000000000010000001412305224000001100000000646part.def comment ""
position 5.5 1.5
cachesize 1
connectornextid 0
flags =  lock off model off template off footprint off xray off bypass off display off render off highlight off unload off savedata off compress off exposed off
outputsNamed3
{
}
inputsNamed3
{
}
inputs
{
}
stat
{
  create 1632390735
  modify 1632390737
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000001200000000020part.parm {
version 0.8
}
0707070000010000000006660000000000000000010000001412305224000001600000000041part.userdata     ___Version___    14.0.2580707070000010000000006660000000000000000010000001412305224000001100000000002part.net 1
0707070000010000000006660000000000000000010000001412305224000000700000000643ch.def comment ""
position 4.5 1
cachesize 1
connectornextid 0
flags =  lock off model off template off footprint off xray off bypass off display off render off highlight off unload off savedata off compress off exposed on
outputsNamed3
{
}
inputsNamed3
{
}
inputs
{
}
stat
{
  create 1632390735
  modify 1632390736
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000001000000000020ch.parm {
version 0.8
}
0707070000010000000006660000000000000000010000001412305224000001400000000041ch.userdata     ___Version___    14.0.2580707070000010000000006660000000000000000010000001412305224000000700000000002ch.net 1
0707070000010000000006660000000000000000010000001412305224000001100000000641shop.def comment ""
position 5 3
cachesize 1
connectornextid 0
flags =  lock off model off template off footprint off xray off bypass off display off render off highlight off unload off savedata off compress off exposed on
outputsNamed3
{
}
inputsNamed3
{
}
inputs
{
}
stat
{
  create 1632390735
  modify 1632390736
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000001200000000020shop.parm {
version 0.8
}
0707070000010000000006660000000000000000010000001412305224000001600000000041shop.userdata     ___Version___    14.0.2580707070000010000000006660000000000000000010000001412305224000001100000000002shop.net 1
0707070000010000000006660000000000000000010000001412305224000001000000000645img.def comment ""
position 4.5 2.5
cachesize 1
connectornextid 0
flags =  lock off model off template off footprint off xray off bypass off display off render off highlight off unload off savedata off compress off exposed on
outputsNamed3
{
}
inputsNamed3
{
}
inputs
{
}
stat
{
  create 1632390735
  modify 1632390737
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000001100000000020img.parm {
version 0.8
}
0707070000010000000006660000000000000000010000001412305224000001500000000041img.userdata     ___Version___    14.0.2580707070000010000000006660000000000000000010000001412305224000001700000000032img/comp1.init type = img
matchesdef = 0
0707070000010000000006660000000000000000010000001412305224000001600000000641img/comp1.def comment ""
position 0 0
cachesize 1
connectornextid 0
flags =  lock off model off template off footprint off xray off bypass off display off render off highlight off unload off savedata off compress off exposed on
outputsNamed3
{
}
inputsNamed3
{
}
inputs
{
}
stat
{
  create 1632390736
  modify 1632390736
  author Owner@Owner-PC
  access 0777
}
color UT_Color RGB 0.8 0.8 0.8 
delscript ""
exprlanguage hscript
end
0707070000010000000006660000000000000000010000001412305224000001700000000020img/comp1.parm {
version 0.8
}
0707070000010000000006660000000000000000010000001412305224000002300000000041img/comp1.userdata     ___Version___    14.0.2580707070000010000000006660000000000000000010000001412305224000001600000000002img/comp1.net 1
0707070000010000000006660000000000000000010000001412305224000001000000000002img.net 1
0707070000010000000006660000000000000000010000001412305224000001000000000002vex.net 1
0707070000010000000006660000000000000000010000001412305224000002600000000000.scenefilevisualizers 0707070000010000000006660000000000000000010000001412305224000001500000002043.application neteditor -d Creation -b 0 -l 0 -f '' -q 1.000000 -v /obj/platonic -3.47049  -2.07056 1 pane1
neteditor -d Creation -b 0 -l 0 -f '' -q 1.000000 -v /obj 0  0 1 pane1
panepath -d Creation -f -p pane1 /obj/platonic/attribwrangle1
panepath -d Creation -f -p panetab2 /obj/
panepath -d Creation -f -p panetab1 /obj/platonic/attribwrangle1
panepath -d Creation -f -p panetab3 /obj/platonic/attribwrangle1
panepath -d Creation -f -p panetab4 /obj/platonic/attribwrangle1
desk set Creation
viewupdate -u always
audiopanel -s p ''
audiopanel -s r off
audiopanel -s s 24
audiopanel -s f 24
audiopanel -t p stop
audiopanel -t l off
audiopanel -t r on
audiopanel -o m off
audiopanel -o t on
audiopanel -o u on
audiopanel -o l 1
audiopanel -o r 1
audiopanel -o d 0
audiopanel -r d 0.2
audiopanel -m 0
audiopanel -a ''
audiopanel -f 1
audiopanel -O 0
colorsettings -D -A -g 2.2 -l "" -p -s -v -i -r -c -f
compproject -r 640 480 -a 1 -d fp16 -p 0 1 -P full -f 0 -F 0 -l on
texcache  -a off -r 2147483647 2147483647 -m 10000 -M 2029
shopvisible +OGL +OGL2 +I3D +VMantra +RIB
0707070000010000000006660000000000000000010000001412305224000000700000000060.takes HoudiniTakeFile 1.0
take name Main kids 0
   e
0707070000010000000006660000000000000000010000001412305224000000500000000024.cwd opcf /
takeset Main
0707070000010000000006660000000000000000010000001412305224000001300000000000TRAILER!!! 